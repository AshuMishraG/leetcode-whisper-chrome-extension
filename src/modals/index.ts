import { ModalInterface } from '@/interface/ModalInterface';
import { ValidModel } from '@/constants/valid_modals';

import { OpenAI_3_5_turbo } from '@/modals/modal/OpenAI_3_5_turbo';
import { GeminiAI_1_5_pro } from '@/modals/modal/GeminiAI_1_5_pro';
import { OpenAi_4o } from '@/modals/modal/OpenAI_40';
import { GeminiAI_2_0_flash } from '@/modals/modal/GeminiAI_2_0_flash';
import { GeminiAI_2_0_flash_lite_preview } from '@/modals/modal/GeminiAI_2_0_flash_lite_preview';
import { GeminiAI_1_5_flash } from '@/modals/modal/GeminiAI_1_5_flash';
import { GeminiAI_1_5_flash_8B } from '@/modals/modal/GeminiAI_1_5_flash_8B';
import { GeminiAI_1_0_pro_deprecated } from '@/modals/modal/GeminiAI_1_0_pro_deprecated';

/**
 * This object contains all the modals that are available in the extension.
 * @type {Record<ValidModel, ModalInterface>}
 */
export const modals: Record<ValidModel, ModalInterface> = {
  'openai_3.5_turbo': new OpenAI_3_5_turbo(),
  'openai_4o': new OpenAi_4o(),
  'gemini_1_5_pro': new GeminiAI_1_5_pro(),
  'gemini_2_0_flash': new GeminiAI_2_0_flash(),
  'gemini_2_0_flash_lite_preview': new GeminiAI_2_0_flash_lite_preview(),
  'gemini_1_5_flash': new GeminiAI_1_5_flash(),
  'gemini_1_5_flash_8b': new GeminiAI_1_5_flash_8B(),
  'gemini_1_0_pro_deprecated': new GeminiAI_1_0_pro_deprecated(),
};