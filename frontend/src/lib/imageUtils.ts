/**
 * 获取正确的图片路径
 * @param imagePath 图片相对于 public 目录的路径
 * @returns 完整的图片URL
 */
export function getImagePath(imagePath: string): string {
  const basePath = process.env.NODE_ENV === 'production' ? '/prodlens' : '';
  
  // 确保路径以 / 开头
  const normalizedPath = imagePath.startsWith('/') ? imagePath : `/${imagePath}`;
  
  return `${basePath}${normalizedPath}`;
}

/**
 * 获取产品logo路径
 * @param logoName logo文件名
 * @returns 完整的logo URL
 */
export function getProductLogoPath(logoName: string): string {
  return getImagePath(`/ProdLogos/${logoName}`);
} 