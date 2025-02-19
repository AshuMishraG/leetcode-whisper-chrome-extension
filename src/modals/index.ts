import { ModalInterface } from '@/interface/ModalInterface';
import { ValidModel } from '@/constants/valid_modals';

import { OpenAI_3_5_turbo } from '@/modals/modal/OpenAI_3_5_turbo';
import { GeminiAI_1_5_pro } from '@/modals/modal/GeminiAI_1_5_pro';
import { OpenAi_4o } from './modal/OpenAI_40';
import { GeminiAI_2_0_flash } from '@/modals/modal/GeminiAI_2_0_flash'; // New model
import { GeminiAI_2_0_flash_lite } from '@/modals/modal/GeminiAI_2_0_flash_lite'; // New model
import { GeminiAI_1_5_flash } from '@/modals/modal/GeminiAI_1_5_flash'; // New model
import { GeminiAI_1_5_flash_8B } from '@/modals/modal/GeminiAI_1_5_flash_8B'; // New model

/**
 * This object contains all the modals that are available in the extension.
 * @type {Record<ValidModel, ModalInterface>}
 */
export const modals: Record<ValidModel, ModalInterface> = {
  'openai_3.5_turbo': new OpenAI_3_5_turbo(),
  'openai_4o': new OpenAi_4o(),
  'gemini_1.5_pro': new GeminiAI_1_5_pro(),
  'gemini_2.0_flash': new GeminiAI_2_0_flash(), // Add new model here
  'gemini_2.0_flash_lite': new GeminiAI_2_0_flash_lite(), // Add new model here
  'gemini_1.5_flash': new GeminiAI_1_5_flash(), // Add new model here
  'gemini_1.5_flash_8B': new GeminiAI_1_5_flash_8B(), // Add new model here
};