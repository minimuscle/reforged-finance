import { formDataProps } from "./route";

export default function validate(formData: formDataProps) {
  if (!formData.name) {
    return false;
  }
  if (!formData.currency) {
    return false;
  }
  if (!formData.gross) {
    return false;
  }
  if (!formData.net) {
    return false;
  }
  if (!formData.frequency) {
    return false;
  }
  if (!formData.goal) {
    return false;
  }
  if (!formData.emergency) {
    return false;
  }
  if (!formData.deposit) {
    if (formData.isSaving) {
      return false;
    }
  }

  //Probably a better way to validate this but this is easier to ready and works fine.

  return true; // All formData fields are valid
}