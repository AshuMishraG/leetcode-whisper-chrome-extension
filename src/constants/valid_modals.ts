/**
 * List of valid models that can be used in the application.
 */
export const VALID_MODELS = [
  {
    model: 'gpt-3.5-turbo',
    name: 'openai_3.5_turbo',
    display: 'GPT-3.5 Turbo',
  },
  {
    model: 'gpt-4o',
    name: 'openai_4o',
    display: 'GPT-4 Optimized',
  },
  {
    model: 'gemini-2.0-flash',
    name: 'gemini_2_0_flash',
    display: 'Gemini 2.0 Flash',
  },
  {
    model: 'gemini-2.0-flash-lite-preview',
    name: 'gemini_2_0_flash_lite_preview',
    display: 'Gemini 2.0 Flash-Lite Preview',
  },
  {
    model: 'gemini-1.5-flash',
    name: 'gemini_1_5_flash',
    display: 'Gemini 1.5 Flash',
  },
  {
    model: 'gemini-1.5-flash-8b',
    name: 'gemini_1_5_flash_8b',
    display: 'Gemini 1.5 Flash-8B',
  },
  {
    model: 'gemini-1.5-pro',
    name: 'gemini_1_5_pro',
    display: 'Gemini 1.5 Pro',
  },
  {
    model: 'gemini-1.0-pro-deprecated',
    name: 'gemini_1_0_pro_deprecated',
    display: 'Gemini 1.0 Pro (Deprecated)',
  },
]

/**
 * Type of valid models that can be used in the application.
 */
export type ValidModel =
  | 'openai_3.5_turbo'
  | 'openai_4o'
  | 'gemini_2_0_flash'
  | 'gemini_2_0_flash_lite_preview'
  | 'gemini_1_5_flash'
  | 'gemini_1_5_flash_8b'
  | 'gemini_1_5_pro'
  | 'gemini_1_0_pro_deprecated'
