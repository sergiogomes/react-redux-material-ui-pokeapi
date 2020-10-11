/**
 * Transforms foo into Foo
 * @param text string
 */
export const capitalizeFirstLetter = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
