import { useWindowDimensions } from 'react-native'

// Detecta tablet (iPad) e devolve ajustes de layout para telas grandes.
export const useResponsive = () => {
  const { width } = useWindowDimensions()
  const isTablet = width >= 768
  return {
    isTablet,
    width,
    // largura máxima de leitura (coluna central) no tablet
    contentMaxWidth: isTablet ? 640 : undefined,
  }
}
