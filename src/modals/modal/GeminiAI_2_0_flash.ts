import {
   GenerateResponseParamsType,
   GenerateResponseReturnType,
   ModalInterface,
 } from '../../interface/ModalInterface';
 import { createGoogleGenerativeAI } from '@ai-sdk/google';
 import { generateObjectResponce } from '../utils';
 import { VALID_MODELS } from '@/constants/valid_modals';
 
 export class GeminiAI_2_0_flash implements ModalInterface {
   name = 'gemini_2.0_flash';
   private apiKey: string = '';
 
   init(apiKey: string) {
     this.apiKey = apiKey;
   }
 
   async generateResponse(
     props: GenerateResponseParamsType
   ): GenerateResponseReturnType {
     try {
       const google = createGoogleGenerativeAI({
         apiKey: this.apiKey,
       });
 
       let data = await generateObjectResponce({
         model: google(
           VALID_MODELS.find((model) => model.name === this.name)?.model!
         ),
         messages: props.messages,
         systemPrompt: props.systemPrompt,
         prompt: props.prompt,
         extractedCode: props.extractedCode,
       });
 
       return {
         error: null,
         success: data.object,
       };
     } catch (error: any) {
       return { error, success: null };
     }
   }
 }