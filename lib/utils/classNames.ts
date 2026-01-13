/**
 * Utilidad para combinar clases CSS condicionales
 * Similar a classnames o clsx
 */

type ClassValue = string | number | boolean | undefined | null | ClassValue[]

export function classNames(...classes: ClassValue[]): string {
  return classes
    .flat()
    .filter(x => typeof x === 'string' && x.length > 0)
    .join(' ')
}
