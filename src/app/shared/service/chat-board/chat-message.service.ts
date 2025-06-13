import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface ChatMessage {
  type: string;
  name: string;
  time: string;
  messages: {
    message_type: string;
    message: string;
    tag: string;
  }[];
}

interface WebhookPayload {
  user_query: string;
}

@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  private messagesSubject = new BehaviorSubject<ChatMessage[]>([]);
  public messages$ = this.messagesSubject.asObservable();
  private webhookUrl = 'https://hook.us2.make.com/e8a4pya1c8c48bw9m8qdnz4bk6ylrj57';

  constructor(private http: HttpClient) {}

  // Obtener todos los mensajes
  getMessages(): Observable<ChatMessage[]> {
    return this.messages$;
  }

  // Agregar un nuevo mensaje
  addMessage(message: ChatMessage) {
    console.log('Nuevo mensaje recibido:', message);
    
    // Extraer el texto del mensaje
    const messageText = message.messages[0].message;
    
    // Crear el payload para el webhook
    const webhookPayload: WebhookPayload = {
      user_query: messageText
    };
    
    // Enviar al webhook
    this.http.post(this.webhookUrl, webhookPayload).subscribe({
      next: (response: any) => {
        console.log('Respuesta del webhook:', response);
        
        // Agregar el mensaje del usuario
        const currentMessages = this.messagesSubject.getValue();
        this.messagesSubject.next([...currentMessages, message]);



        // Crear y agregar el mensaje de respuesta del sistema
        const systemResponses: ChatMessage[] = [
          {
            type: 'receive',
            name: 'PiBi',
            time: new Date().toLocaleTimeString(),
            messages: [{
              message_type: 'massage',
              message: response[0].pre_response_text || 'No hay análisis disponible',
              tag: 'L'
            }]
          },
          {
            type: 'receive',
            name: 'PiBi',
            time: new Date().toLocaleTimeString(),
            messages: [{
              message_type: 'massage',
              message: response[0].analysis || 'No hay texto de respuesta disponible',
              tag: 'L'
            }]
          },
          {
            type: 'receive',
            name: 'PiBi',
            time: new Date().toLocaleTimeString(),
            messages: [{
              message_type: 'massage',
              message: response[0].recommendations || 'No hay recomendaciones disponibles',
              tag: 'L'
            }]
          }
        ];
        
        // Agregar las respuestas del sistema después de un pequeño delay
        setTimeout(() => {
          const updatedMessages = this.messagesSubject.getValue();
          this.messagesSubject.next([...updatedMessages, ...systemResponses]);
        }, 500);
      },
      error: (error) => {
        console.error('Error al enviar mensaje:', error);
        
        // Agregar el mensaje del usuario incluso si hay error
        const currentMessages = this.messagesSubject.getValue();
        this.messagesSubject.next([...currentMessages, message]);

        // Crear y agregar mensaje de error
        const errorResponse: ChatMessage = {
          type: 'receive',
          name: 'PiBi',
          time: new Date().toLocaleTimeString(),
          messages: [{
            message_type: 'massage',
            message: 'Lo siento, hubo un error al procesar tu mensaje',
            tag: 'L'
          }]
        };
        
        setTimeout(() => {
          const updatedMessages = this.messagesSubject.getValue();
          this.messagesSubject.next([...updatedMessages, errorResponse]);
        }, 500);
      }
    });
  }

  // Obtener mensajes actuales
  getCurrentMessages(): ChatMessage[] {
    return this.messagesSubject.getValue();
  }

  // Limpiar mensajes
  clearMessages() {
    this.messagesSubject.next([]);
  }
} 