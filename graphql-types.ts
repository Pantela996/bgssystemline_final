export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProduct = Node & {
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  variants?: Maybe<Array<Maybe<ShopifyProductVariant>>>;
  metafields?: Maybe<Array<Maybe<ShopifyProductMetafield>>>;
  images?: Maybe<Array<Maybe<ShopifyProductImage>>>;
  storefrontId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  descriptionHtml?: Maybe<Scalars['String']>;
  featuredImage?: Maybe<ShopifyProductFeaturedImage>;
  featuredMedia?: Maybe<ShopifyProductFeaturedMedia>;
  giftCardTemplateSuffix?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  hasOnlyDefaultVariant?: Maybe<Scalars['Boolean']>;
  hasOutOfStockVariants?: Maybe<Scalars['Boolean']>;
  isGiftCard?: Maybe<Scalars['Boolean']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  mediaCount?: Maybe<Scalars['Int']>;
  onlineStorePreviewUrl?: Maybe<Scalars['String']>;
  options?: Maybe<Array<Maybe<ShopifyProductOptions>>>;
  priceRangeV2?: Maybe<ShopifyProductPriceRangeV2>;
  productType?: Maybe<Scalars['String']>;
  publishedAt?: Maybe<Scalars['Date']>;
  requiresSellingPlan?: Maybe<Scalars['Boolean']>;
  sellingPlanGroupCount?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  templateSuffix?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalInventory?: Maybe<Scalars['Int']>;
  totalVariants?: Maybe<Scalars['Int']>;
  tracksInventory?: Maybe<Scalars['Boolean']>;
  updatedAt?: Maybe<Scalars['Date']>;
  vendor?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductPublishedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMedia = {
  alt?: Maybe<Scalars['String']>;
  mediaContentType?: Maybe<Scalars['String']>;
  preview?: Maybe<ShopifyProductFeaturedMediaPreview>;
  status?: Maybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMediaPreview = {
  image?: Maybe<ShopifyProductFeaturedMediaPreviewImage>;
  status?: Maybe<Scalars['String']>;
};

export type ShopifyProductOptions = {
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  values?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type ShopifyProductPriceRangeV2 = {
  maxVariantPrice?: Maybe<ShopifyProductPriceRangeV2MaxVariantPrice>;
  minVariantPrice?: Maybe<ShopifyProductPriceRangeV2MinVariantPrice>;
};

export type ShopifyProductPriceRangeV2MaxVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductPriceRangeV2MinVariantPrice = {
  amount?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
};

export type ShopifyProductImage = Node & {
  product: ShopifyProduct;
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  _xparentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductImageGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariant = Node & {
  product: ShopifyProduct;
  metafields?: Maybe<Array<Maybe<ShopifyProductVariantMetafield>>>;
  availableForSale?: Maybe<Scalars['Boolean']>;
  barcode?: Maybe<Scalars['String']>;
  compareAtPrice?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  displayName?: Maybe<Scalars['String']>;
  inventoryPolicy?: Maybe<Scalars['String']>;
  inventoryQuantity?: Maybe<Scalars['Int']>;
  legacyResourceId?: Maybe<Scalars['String']>;
  position?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['String']>;
  selectedOptions?: Maybe<Array<Maybe<ShopifyProductVariantSelectedOptions>>>;
  sellingPlanGroupCount?: Maybe<Scalars['Int']>;
  sku?: Maybe<Scalars['String']>;
  storefrontId?: Maybe<Scalars['String']>;
  taxable?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  weight?: Maybe<Scalars['Int']>;
  weightUnit?: Maybe<Scalars['String']>;
  _xparentId?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  shopifyId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ShopifyProductVariantCreatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type ShopifyProductVariantUpdatedAtArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariantSelectedOptions = {
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type ShopifyMetafieldInterface = {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductMetafield = Node & ShopifyMetafieldInterface & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  product?: Maybe<ShopifyProduct>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductVariantMetafield = Node & ShopifyMetafieldInterface & {
  createdAt: Scalars['Date'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  key: Scalars['String'];
  namespace: Scalars['String'];
  ownerType: Scalars['String'];
  updatedAt: Scalars['Date'];
  value: Scalars['String'];
  type: Scalars['String'];
  /** @deprecated Shopify has deprecated this field */
  valueType: Scalars['String'];
  productVariant?: Maybe<ShopifyProductVariant>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ShopifyProductFeaturedImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductFeaturedImageGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductFeaturedMediaPreviewImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductFeaturedMediaPreviewImageGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ShopifyProductVariantImage = {
  altText?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  originalSrc: Scalars['String'];
  transformedSrc: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
  gatsbyImageData: Scalars['JSON'];
};


export type ShopifyProductVariantImageGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<GatsbyImagePlaceholder>;
  formats?: InputMaybe<Array<InputMaybe<GatsbyImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type GatsbyImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type GatsbyImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type GatsbyImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type ImageFormat =
  | 'NO_CHANGE'
  | 'AUTO'
  | 'JPG'
  | 'PNG'
  | 'WEBP'
  | 'AVIF';

export type ImageFit =
  | 'COVER'
  | 'CONTAIN'
  | 'FILL'
  | 'INSIDE'
  | 'OUTSIDE';

export type ImageLayout =
  | 'FIXED'
  | 'FULL_WIDTH'
  | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder =
  | 'DOMINANT_COLOR'
  | 'TRACED_SVG'
  | 'BLURRED'
  | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type StaticImage = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  sourceInstanceName?: Maybe<Scalars['String']>;
  relativePath?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  prettySize?: Maybe<Scalars['String']>;
  modifiedTime?: Maybe<Scalars['Date']>;
  accessTime?: Maybe<Scalars['Date']>;
  changeTime?: Maybe<Scalars['Date']>;
  birthTime?: Maybe<Scalars['Date']>;
  root?: Maybe<Scalars['String']>;
  dir?: Maybe<Scalars['String']>;
  base?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  absolutePath?: Maybe<Scalars['String']>;
  relativeDirectory?: Maybe<Scalars['String']>;
  dev?: Maybe<Scalars['Int']>;
  mode?: Maybe<Scalars['Int']>;
  nlink?: Maybe<Scalars['Int']>;
  uid?: Maybe<Scalars['Int']>;
  rdev?: Maybe<Scalars['Int']>;
  blksize?: Maybe<Scalars['Int']>;
  ino?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  atimeMs?: Maybe<Scalars['Float']>;
  mtimeMs?: Maybe<Scalars['Float']>;
  ctimeMs?: Maybe<Scalars['Float']>;
  birthtimeMs?: Maybe<Scalars['Float']>;
  atime?: Maybe<Scalars['Date']>;
  mtime?: Maybe<Scalars['Date']>;
  ctime?: Maybe<Scalars['Date']>;
  birthtime?: Maybe<Scalars['Date']>;
};


export type StaticImageModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type StaticImageBirthtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  shopifyProduct?: Maybe<ShopifyProduct>;
  allShopifyProduct: ShopifyProductConnection;
  shopifyProductImage?: Maybe<ShopifyProductImage>;
  allShopifyProductImage: ShopifyProductImageConnection;
  shopifyProductVariant?: Maybe<ShopifyProductVariant>;
  allShopifyProductVariant: ShopifyProductVariantConnection;
  shopifyMetafieldInterface?: Maybe<ShopifyMetafieldInterface>;
  allShopifyMetafieldInterface: ShopifyMetafieldInterfaceConnection;
  shopifyProductMetafield?: Maybe<ShopifyProductMetafield>;
  allShopifyProductMetafield: ShopifyProductMetafieldConnection;
  shopifyProductVariantMetafield?: Maybe<ShopifyProductVariantMetafield>;
  allShopifyProductVariantMetafield: ShopifyProductVariantMetafieldConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  staticImage?: Maybe<StaticImage>;
  allStaticImage: StaticImageConnection;
};


export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<FileSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<DirectorySortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<SiteSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<SiteFunctionSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<SitePageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<SitePluginSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductArgs = {
  tags?: InputMaybe<StringQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  metafields?: InputMaybe<ShopifyProductMetafieldFilterListInput>;
  images?: InputMaybe<ShopifyProductImageFilterListInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyProductFeaturedImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyProductFeaturedMediaFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionsFilterListInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductArgs = {
  filter?: InputMaybe<ShopifyProductFilterInput>;
  sort?: InputMaybe<ShopifyProductSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductImageArgs = {
  product?: InputMaybe<ShopifyProductFilterInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  _xparentId?: InputMaybe<StringQueryOperatorInput>;
  productId?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductImageArgs = {
  filter?: InputMaybe<ShopifyProductImageFilterInput>;
  sort?: InputMaybe<ShopifyProductImageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantArgs = {
  product?: InputMaybe<ShopifyProductFilterInput>;
  metafields?: InputMaybe<ShopifyProductVariantMetafieldFilterListInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  compareAtPrice?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  inventoryPolicy?: InputMaybe<StringQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  price?: InputMaybe<StringQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<IntQueryOperatorInput>;
  weightUnit?: InputMaybe<StringQueryOperatorInput>;
  _xparentId?: InputMaybe<StringQueryOperatorInput>;
  productId?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductVariantArgs = {
  filter?: InputMaybe<ShopifyProductVariantFilterInput>;
  sort?: InputMaybe<ShopifyProductVariantSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyMetafieldInterfaceArgs = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyMetafieldInterfaceArgs = {
  filter?: InputMaybe<ShopifyMetafieldInterfaceFilterInput>;
  sort?: InputMaybe<ShopifyMetafieldInterfaceSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductMetafieldArgs = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductMetafieldArgs = {
  filter?: InputMaybe<ShopifyProductMetafieldFilterInput>;
  sort?: InputMaybe<ShopifyProductMetafieldSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryShopifyProductVariantMetafieldArgs = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  productVariant?: InputMaybe<ShopifyProductVariantFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllShopifyProductVariantMetafieldArgs = {
  filter?: InputMaybe<ShopifyProductVariantMetafieldFilterInput>;
  sort?: InputMaybe<ShopifyProductVariantMetafieldSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<ImageSharpSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};


export type QueryStaticImageArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};


export type QueryAllStaticImageArgs = {
  filter?: InputMaybe<StaticImageFilterInput>;
  sort?: InputMaybe<StaticImageSortInput>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SortOrderEnum =
  | 'ASC'
  | 'DESC';

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'port'
  | 'host'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantFilterInput>;
};

export type ShopifyProductVariantFilterInput = {
  product?: InputMaybe<ShopifyProductFilterInput>;
  metafields?: InputMaybe<ShopifyProductVariantMetafieldFilterListInput>;
  availableForSale?: InputMaybe<BooleanQueryOperatorInput>;
  barcode?: InputMaybe<StringQueryOperatorInput>;
  compareAtPrice?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  inventoryPolicy?: InputMaybe<StringQueryOperatorInput>;
  inventoryQuantity?: InputMaybe<IntQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  price?: InputMaybe<StringQueryOperatorInput>;
  selectedOptions?: InputMaybe<ShopifyProductVariantSelectedOptionsFilterListInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  sku?: InputMaybe<StringQueryOperatorInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  taxable?: InputMaybe<BooleanQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  weight?: InputMaybe<IntQueryOperatorInput>;
  weightUnit?: InputMaybe<StringQueryOperatorInput>;
  _xparentId?: InputMaybe<StringQueryOperatorInput>;
  productId?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductFilterInput = {
  tags?: InputMaybe<StringQueryOperatorInput>;
  variants?: InputMaybe<ShopifyProductVariantFilterListInput>;
  metafields?: InputMaybe<ShopifyProductMetafieldFilterListInput>;
  images?: InputMaybe<ShopifyProductImageFilterListInput>;
  storefrontId?: InputMaybe<StringQueryOperatorInput>;
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  descriptionHtml?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<ShopifyProductFeaturedImageFilterInput>;
  featuredMedia?: InputMaybe<ShopifyProductFeaturedMediaFilterInput>;
  giftCardTemplateSuffix?: InputMaybe<StringQueryOperatorInput>;
  handle?: InputMaybe<StringQueryOperatorInput>;
  hasOnlyDefaultVariant?: InputMaybe<BooleanQueryOperatorInput>;
  hasOutOfStockVariants?: InputMaybe<BooleanQueryOperatorInput>;
  isGiftCard?: InputMaybe<BooleanQueryOperatorInput>;
  legacyResourceId?: InputMaybe<StringQueryOperatorInput>;
  mediaCount?: InputMaybe<IntQueryOperatorInput>;
  onlineStorePreviewUrl?: InputMaybe<StringQueryOperatorInput>;
  options?: InputMaybe<ShopifyProductOptionsFilterListInput>;
  priceRangeV2?: InputMaybe<ShopifyProductPriceRangeV2FilterInput>;
  productType?: InputMaybe<StringQueryOperatorInput>;
  publishedAt?: InputMaybe<DateQueryOperatorInput>;
  requiresSellingPlan?: InputMaybe<BooleanQueryOperatorInput>;
  sellingPlanGroupCount?: InputMaybe<IntQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  templateSuffix?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  totalInventory?: InputMaybe<IntQueryOperatorInput>;
  totalVariants?: InputMaybe<IntQueryOperatorInput>;
  tracksInventory?: InputMaybe<BooleanQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  vendor?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductMetafieldFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductMetafieldFilterInput>;
};

export type ShopifyProductMetafieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  product?: InputMaybe<ShopifyProductFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductImageFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductImageFilterInput>;
};

export type ShopifyProductImageFilterInput = {
  product?: InputMaybe<ShopifyProductFilterInput>;
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  _xparentId?: InputMaybe<StringQueryOperatorInput>;
  productId?: InputMaybe<StringQueryOperatorInput>;
  shopifyId?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductFeaturedImageFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  mediaContentType?: InputMaybe<StringQueryOperatorInput>;
  preview?: InputMaybe<ShopifyProductFeaturedMediaPreviewFilterInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaPreviewFilterInput = {
  image?: InputMaybe<ShopifyProductFeaturedMediaPreviewImageFilterInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductFeaturedMediaPreviewImageFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  originalSrc?: InputMaybe<StringQueryOperatorInput>;
  transformedSrc?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ShopifyProductOptionsFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductOptionsFilterInput>;
};

export type ShopifyProductOptionsFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  position?: InputMaybe<IntQueryOperatorInput>;
  values?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeV2FilterInput = {
  maxVariantPrice?: InputMaybe<ShopifyProductPriceRangeV2MaxVariantPriceFilterInput>;
  minVariantPrice?: InputMaybe<ShopifyProductPriceRangeV2MinVariantPriceFilterInput>;
};

export type ShopifyProductPriceRangeV2MaxVariantPriceFilterInput = {
  amount?: InputMaybe<StringQueryOperatorInput>;
  currencyCode?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductPriceRangeV2MinVariantPriceFilterInput = {
  amount?: InputMaybe<StringQueryOperatorInput>;
  currencyCode?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductVariantMetafieldFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantMetafieldFilterInput>;
};

export type ShopifyProductVariantMetafieldFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  productVariant?: InputMaybe<ShopifyProductVariantFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterListInput = {
  elemMatch?: InputMaybe<ShopifyProductVariantSelectedOptionsFilterInput>;
};

export type ShopifyProductVariantSelectedOptionsFilterInput = {
  name?: InputMaybe<StringQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
};

export type ShopifyProductConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
};


export type ShopifyProductConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionMaxArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionMinArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionSumArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductEdge = {
  next?: Maybe<ShopifyProduct>;
  node: ShopifyProduct;
  previous?: Maybe<ShopifyProduct>;
};

export type ShopifyProductFieldsEnum =
  | 'tags'
  | 'variants'
  | 'variants___product___tags'
  | 'variants___product___variants'
  | 'variants___product___variants___metafields'
  | 'variants___product___variants___availableForSale'
  | 'variants___product___variants___barcode'
  | 'variants___product___variants___compareAtPrice'
  | 'variants___product___variants___createdAt'
  | 'variants___product___variants___displayName'
  | 'variants___product___variants___inventoryPolicy'
  | 'variants___product___variants___inventoryQuantity'
  | 'variants___product___variants___legacyResourceId'
  | 'variants___product___variants___position'
  | 'variants___product___variants___price'
  | 'variants___product___variants___selectedOptions'
  | 'variants___product___variants___sellingPlanGroupCount'
  | 'variants___product___variants___sku'
  | 'variants___product___variants___storefrontId'
  | 'variants___product___variants___taxable'
  | 'variants___product___variants___title'
  | 'variants___product___variants___updatedAt'
  | 'variants___product___variants___weight'
  | 'variants___product___variants___weightUnit'
  | 'variants___product___variants____xparentId'
  | 'variants___product___variants___productId'
  | 'variants___product___variants___shopifyId'
  | 'variants___product___variants___id'
  | 'variants___product___variants___children'
  | 'variants___product___metafields'
  | 'variants___product___metafields___createdAt'
  | 'variants___product___metafields___description'
  | 'variants___product___metafields___id'
  | 'variants___product___metafields___key'
  | 'variants___product___metafields___namespace'
  | 'variants___product___metafields___ownerType'
  | 'variants___product___metafields___updatedAt'
  | 'variants___product___metafields___value'
  | 'variants___product___metafields___type'
  | 'variants___product___metafields___valueType'
  | 'variants___product___metafields___children'
  | 'variants___product___images'
  | 'variants___product___images___altText'
  | 'variants___product___images___height'
  | 'variants___product___images___id'
  | 'variants___product___images___originalSrc'
  | 'variants___product___images___transformedSrc'
  | 'variants___product___images___width'
  | 'variants___product___images___src'
  | 'variants___product___images____xparentId'
  | 'variants___product___images___productId'
  | 'variants___product___images___shopifyId'
  | 'variants___product___images___children'
  | 'variants___product___storefrontId'
  | 'variants___product___createdAt'
  | 'variants___product___description'
  | 'variants___product___descriptionHtml'
  | 'variants___product___featuredImage___altText'
  | 'variants___product___featuredImage___height'
  | 'variants___product___featuredImage___id'
  | 'variants___product___featuredImage___originalSrc'
  | 'variants___product___featuredImage___transformedSrc'
  | 'variants___product___featuredImage___width'
  | 'variants___product___featuredMedia___alt'
  | 'variants___product___featuredMedia___mediaContentType'
  | 'variants___product___featuredMedia___status'
  | 'variants___product___giftCardTemplateSuffix'
  | 'variants___product___handle'
  | 'variants___product___hasOnlyDefaultVariant'
  | 'variants___product___hasOutOfStockVariants'
  | 'variants___product___isGiftCard'
  | 'variants___product___legacyResourceId'
  | 'variants___product___mediaCount'
  | 'variants___product___onlineStorePreviewUrl'
  | 'variants___product___options'
  | 'variants___product___options___id'
  | 'variants___product___options___name'
  | 'variants___product___options___position'
  | 'variants___product___options___values'
  | 'variants___product___productType'
  | 'variants___product___publishedAt'
  | 'variants___product___requiresSellingPlan'
  | 'variants___product___sellingPlanGroupCount'
  | 'variants___product___status'
  | 'variants___product___templateSuffix'
  | 'variants___product___title'
  | 'variants___product___totalInventory'
  | 'variants___product___totalVariants'
  | 'variants___product___tracksInventory'
  | 'variants___product___updatedAt'
  | 'variants___product___vendor'
  | 'variants___product___shopifyId'
  | 'variants___product___id'
  | 'variants___product___parent___id'
  | 'variants___product___parent___children'
  | 'variants___product___children'
  | 'variants___product___children___id'
  | 'variants___product___children___children'
  | 'variants___product___internal___content'
  | 'variants___product___internal___contentDigest'
  | 'variants___product___internal___description'
  | 'variants___product___internal___fieldOwners'
  | 'variants___product___internal___ignoreType'
  | 'variants___product___internal___mediaType'
  | 'variants___product___internal___owner'
  | 'variants___product___internal___type'
  | 'variants___metafields'
  | 'variants___metafields___createdAt'
  | 'variants___metafields___description'
  | 'variants___metafields___id'
  | 'variants___metafields___key'
  | 'variants___metafields___namespace'
  | 'variants___metafields___ownerType'
  | 'variants___metafields___updatedAt'
  | 'variants___metafields___value'
  | 'variants___metafields___type'
  | 'variants___metafields___valueType'
  | 'variants___metafields___productVariant___metafields'
  | 'variants___metafields___productVariant___availableForSale'
  | 'variants___metafields___productVariant___barcode'
  | 'variants___metafields___productVariant___compareAtPrice'
  | 'variants___metafields___productVariant___createdAt'
  | 'variants___metafields___productVariant___displayName'
  | 'variants___metafields___productVariant___inventoryPolicy'
  | 'variants___metafields___productVariant___inventoryQuantity'
  | 'variants___metafields___productVariant___legacyResourceId'
  | 'variants___metafields___productVariant___position'
  | 'variants___metafields___productVariant___price'
  | 'variants___metafields___productVariant___selectedOptions'
  | 'variants___metafields___productVariant___sellingPlanGroupCount'
  | 'variants___metafields___productVariant___sku'
  | 'variants___metafields___productVariant___storefrontId'
  | 'variants___metafields___productVariant___taxable'
  | 'variants___metafields___productVariant___title'
  | 'variants___metafields___productVariant___updatedAt'
  | 'variants___metafields___productVariant___weight'
  | 'variants___metafields___productVariant___weightUnit'
  | 'variants___metafields___productVariant____xparentId'
  | 'variants___metafields___productVariant___productId'
  | 'variants___metafields___productVariant___shopifyId'
  | 'variants___metafields___productVariant___id'
  | 'variants___metafields___productVariant___children'
  | 'variants___metafields___parent___id'
  | 'variants___metafields___parent___children'
  | 'variants___metafields___children'
  | 'variants___metafields___children___id'
  | 'variants___metafields___children___children'
  | 'variants___metafields___internal___content'
  | 'variants___metafields___internal___contentDigest'
  | 'variants___metafields___internal___description'
  | 'variants___metafields___internal___fieldOwners'
  | 'variants___metafields___internal___ignoreType'
  | 'variants___metafields___internal___mediaType'
  | 'variants___metafields___internal___owner'
  | 'variants___metafields___internal___type'
  | 'variants___availableForSale'
  | 'variants___barcode'
  | 'variants___compareAtPrice'
  | 'variants___createdAt'
  | 'variants___displayName'
  | 'variants___inventoryPolicy'
  | 'variants___inventoryQuantity'
  | 'variants___legacyResourceId'
  | 'variants___position'
  | 'variants___price'
  | 'variants___selectedOptions'
  | 'variants___selectedOptions___name'
  | 'variants___selectedOptions___value'
  | 'variants___sellingPlanGroupCount'
  | 'variants___sku'
  | 'variants___storefrontId'
  | 'variants___taxable'
  | 'variants___title'
  | 'variants___updatedAt'
  | 'variants___weight'
  | 'variants___weightUnit'
  | 'variants____xparentId'
  | 'variants___productId'
  | 'variants___shopifyId'
  | 'variants___id'
  | 'variants___parent___id'
  | 'variants___parent___parent___id'
  | 'variants___parent___parent___children'
  | 'variants___parent___children'
  | 'variants___parent___children___id'
  | 'variants___parent___children___children'
  | 'variants___parent___internal___content'
  | 'variants___parent___internal___contentDigest'
  | 'variants___parent___internal___description'
  | 'variants___parent___internal___fieldOwners'
  | 'variants___parent___internal___ignoreType'
  | 'variants___parent___internal___mediaType'
  | 'variants___parent___internal___owner'
  | 'variants___parent___internal___type'
  | 'variants___children'
  | 'variants___children___id'
  | 'variants___children___parent___id'
  | 'variants___children___parent___children'
  | 'variants___children___children'
  | 'variants___children___children___id'
  | 'variants___children___children___children'
  | 'variants___children___internal___content'
  | 'variants___children___internal___contentDigest'
  | 'variants___children___internal___description'
  | 'variants___children___internal___fieldOwners'
  | 'variants___children___internal___ignoreType'
  | 'variants___children___internal___mediaType'
  | 'variants___children___internal___owner'
  | 'variants___children___internal___type'
  | 'variants___internal___content'
  | 'variants___internal___contentDigest'
  | 'variants___internal___description'
  | 'variants___internal___fieldOwners'
  | 'variants___internal___ignoreType'
  | 'variants___internal___mediaType'
  | 'variants___internal___owner'
  | 'variants___internal___type'
  | 'metafields'
  | 'metafields___createdAt'
  | 'metafields___description'
  | 'metafields___id'
  | 'metafields___key'
  | 'metafields___namespace'
  | 'metafields___ownerType'
  | 'metafields___updatedAt'
  | 'metafields___value'
  | 'metafields___type'
  | 'metafields___valueType'
  | 'metafields___product___tags'
  | 'metafields___product___variants'
  | 'metafields___product___variants___metafields'
  | 'metafields___product___variants___availableForSale'
  | 'metafields___product___variants___barcode'
  | 'metafields___product___variants___compareAtPrice'
  | 'metafields___product___variants___createdAt'
  | 'metafields___product___variants___displayName'
  | 'metafields___product___variants___inventoryPolicy'
  | 'metafields___product___variants___inventoryQuantity'
  | 'metafields___product___variants___legacyResourceId'
  | 'metafields___product___variants___position'
  | 'metafields___product___variants___price'
  | 'metafields___product___variants___selectedOptions'
  | 'metafields___product___variants___sellingPlanGroupCount'
  | 'metafields___product___variants___sku'
  | 'metafields___product___variants___storefrontId'
  | 'metafields___product___variants___taxable'
  | 'metafields___product___variants___title'
  | 'metafields___product___variants___updatedAt'
  | 'metafields___product___variants___weight'
  | 'metafields___product___variants___weightUnit'
  | 'metafields___product___variants____xparentId'
  | 'metafields___product___variants___productId'
  | 'metafields___product___variants___shopifyId'
  | 'metafields___product___variants___id'
  | 'metafields___product___variants___children'
  | 'metafields___product___metafields'
  | 'metafields___product___metafields___createdAt'
  | 'metafields___product___metafields___description'
  | 'metafields___product___metafields___id'
  | 'metafields___product___metafields___key'
  | 'metafields___product___metafields___namespace'
  | 'metafields___product___metafields___ownerType'
  | 'metafields___product___metafields___updatedAt'
  | 'metafields___product___metafields___value'
  | 'metafields___product___metafields___type'
  | 'metafields___product___metafields___valueType'
  | 'metafields___product___metafields___children'
  | 'metafields___product___images'
  | 'metafields___product___images___altText'
  | 'metafields___product___images___height'
  | 'metafields___product___images___id'
  | 'metafields___product___images___originalSrc'
  | 'metafields___product___images___transformedSrc'
  | 'metafields___product___images___width'
  | 'metafields___product___images___src'
  | 'metafields___product___images____xparentId'
  | 'metafields___product___images___productId'
  | 'metafields___product___images___shopifyId'
  | 'metafields___product___images___children'
  | 'metafields___product___storefrontId'
  | 'metafields___product___createdAt'
  | 'metafields___product___description'
  | 'metafields___product___descriptionHtml'
  | 'metafields___product___featuredImage___altText'
  | 'metafields___product___featuredImage___height'
  | 'metafields___product___featuredImage___id'
  | 'metafields___product___featuredImage___originalSrc'
  | 'metafields___product___featuredImage___transformedSrc'
  | 'metafields___product___featuredImage___width'
  | 'metafields___product___featuredMedia___alt'
  | 'metafields___product___featuredMedia___mediaContentType'
  | 'metafields___product___featuredMedia___status'
  | 'metafields___product___giftCardTemplateSuffix'
  | 'metafields___product___handle'
  | 'metafields___product___hasOnlyDefaultVariant'
  | 'metafields___product___hasOutOfStockVariants'
  | 'metafields___product___isGiftCard'
  | 'metafields___product___legacyResourceId'
  | 'metafields___product___mediaCount'
  | 'metafields___product___onlineStorePreviewUrl'
  | 'metafields___product___options'
  | 'metafields___product___options___id'
  | 'metafields___product___options___name'
  | 'metafields___product___options___position'
  | 'metafields___product___options___values'
  | 'metafields___product___productType'
  | 'metafields___product___publishedAt'
  | 'metafields___product___requiresSellingPlan'
  | 'metafields___product___sellingPlanGroupCount'
  | 'metafields___product___status'
  | 'metafields___product___templateSuffix'
  | 'metafields___product___title'
  | 'metafields___product___totalInventory'
  | 'metafields___product___totalVariants'
  | 'metafields___product___tracksInventory'
  | 'metafields___product___updatedAt'
  | 'metafields___product___vendor'
  | 'metafields___product___shopifyId'
  | 'metafields___product___id'
  | 'metafields___product___parent___id'
  | 'metafields___product___parent___children'
  | 'metafields___product___children'
  | 'metafields___product___children___id'
  | 'metafields___product___children___children'
  | 'metafields___product___internal___content'
  | 'metafields___product___internal___contentDigest'
  | 'metafields___product___internal___description'
  | 'metafields___product___internal___fieldOwners'
  | 'metafields___product___internal___ignoreType'
  | 'metafields___product___internal___mediaType'
  | 'metafields___product___internal___owner'
  | 'metafields___product___internal___type'
  | 'metafields___parent___id'
  | 'metafields___parent___parent___id'
  | 'metafields___parent___parent___children'
  | 'metafields___parent___children'
  | 'metafields___parent___children___id'
  | 'metafields___parent___children___children'
  | 'metafields___parent___internal___content'
  | 'metafields___parent___internal___contentDigest'
  | 'metafields___parent___internal___description'
  | 'metafields___parent___internal___fieldOwners'
  | 'metafields___parent___internal___ignoreType'
  | 'metafields___parent___internal___mediaType'
  | 'metafields___parent___internal___owner'
  | 'metafields___parent___internal___type'
  | 'metafields___children'
  | 'metafields___children___id'
  | 'metafields___children___parent___id'
  | 'metafields___children___parent___children'
  | 'metafields___children___children'
  | 'metafields___children___children___id'
  | 'metafields___children___children___children'
  | 'metafields___children___internal___content'
  | 'metafields___children___internal___contentDigest'
  | 'metafields___children___internal___description'
  | 'metafields___children___internal___fieldOwners'
  | 'metafields___children___internal___ignoreType'
  | 'metafields___children___internal___mediaType'
  | 'metafields___children___internal___owner'
  | 'metafields___children___internal___type'
  | 'metafields___internal___content'
  | 'metafields___internal___contentDigest'
  | 'metafields___internal___description'
  | 'metafields___internal___fieldOwners'
  | 'metafields___internal___ignoreType'
  | 'metafields___internal___mediaType'
  | 'metafields___internal___owner'
  | 'metafields___internal___type'
  | 'images'
  | 'images___product___tags'
  | 'images___product___variants'
  | 'images___product___variants___metafields'
  | 'images___product___variants___availableForSale'
  | 'images___product___variants___barcode'
  | 'images___product___variants___compareAtPrice'
  | 'images___product___variants___createdAt'
  | 'images___product___variants___displayName'
  | 'images___product___variants___inventoryPolicy'
  | 'images___product___variants___inventoryQuantity'
  | 'images___product___variants___legacyResourceId'
  | 'images___product___variants___position'
  | 'images___product___variants___price'
  | 'images___product___variants___selectedOptions'
  | 'images___product___variants___sellingPlanGroupCount'
  | 'images___product___variants___sku'
  | 'images___product___variants___storefrontId'
  | 'images___product___variants___taxable'
  | 'images___product___variants___title'
  | 'images___product___variants___updatedAt'
  | 'images___product___variants___weight'
  | 'images___product___variants___weightUnit'
  | 'images___product___variants____xparentId'
  | 'images___product___variants___productId'
  | 'images___product___variants___shopifyId'
  | 'images___product___variants___id'
  | 'images___product___variants___children'
  | 'images___product___metafields'
  | 'images___product___metafields___createdAt'
  | 'images___product___metafields___description'
  | 'images___product___metafields___id'
  | 'images___product___metafields___key'
  | 'images___product___metafields___namespace'
  | 'images___product___metafields___ownerType'
  | 'images___product___metafields___updatedAt'
  | 'images___product___metafields___value'
  | 'images___product___metafields___type'
  | 'images___product___metafields___valueType'
  | 'images___product___metafields___children'
  | 'images___product___images'
  | 'images___product___images___altText'
  | 'images___product___images___height'
  | 'images___product___images___id'
  | 'images___product___images___originalSrc'
  | 'images___product___images___transformedSrc'
  | 'images___product___images___width'
  | 'images___product___images___src'
  | 'images___product___images____xparentId'
  | 'images___product___images___productId'
  | 'images___product___images___shopifyId'
  | 'images___product___images___children'
  | 'images___product___storefrontId'
  | 'images___product___createdAt'
  | 'images___product___description'
  | 'images___product___descriptionHtml'
  | 'images___product___featuredImage___altText'
  | 'images___product___featuredImage___height'
  | 'images___product___featuredImage___id'
  | 'images___product___featuredImage___originalSrc'
  | 'images___product___featuredImage___transformedSrc'
  | 'images___product___featuredImage___width'
  | 'images___product___featuredMedia___alt'
  | 'images___product___featuredMedia___mediaContentType'
  | 'images___product___featuredMedia___status'
  | 'images___product___giftCardTemplateSuffix'
  | 'images___product___handle'
  | 'images___product___hasOnlyDefaultVariant'
  | 'images___product___hasOutOfStockVariants'
  | 'images___product___isGiftCard'
  | 'images___product___legacyResourceId'
  | 'images___product___mediaCount'
  | 'images___product___onlineStorePreviewUrl'
  | 'images___product___options'
  | 'images___product___options___id'
  | 'images___product___options___name'
  | 'images___product___options___position'
  | 'images___product___options___values'
  | 'images___product___productType'
  | 'images___product___publishedAt'
  | 'images___product___requiresSellingPlan'
  | 'images___product___sellingPlanGroupCount'
  | 'images___product___status'
  | 'images___product___templateSuffix'
  | 'images___product___title'
  | 'images___product___totalInventory'
  | 'images___product___totalVariants'
  | 'images___product___tracksInventory'
  | 'images___product___updatedAt'
  | 'images___product___vendor'
  | 'images___product___shopifyId'
  | 'images___product___id'
  | 'images___product___parent___id'
  | 'images___product___parent___children'
  | 'images___product___children'
  | 'images___product___children___id'
  | 'images___product___children___children'
  | 'images___product___internal___content'
  | 'images___product___internal___contentDigest'
  | 'images___product___internal___description'
  | 'images___product___internal___fieldOwners'
  | 'images___product___internal___ignoreType'
  | 'images___product___internal___mediaType'
  | 'images___product___internal___owner'
  | 'images___product___internal___type'
  | 'images___altText'
  | 'images___height'
  | 'images___id'
  | 'images___originalSrc'
  | 'images___transformedSrc'
  | 'images___width'
  | 'images___src'
  | 'images____xparentId'
  | 'images___productId'
  | 'images___shopifyId'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'storefrontId'
  | 'createdAt'
  | 'description'
  | 'descriptionHtml'
  | 'featuredImage___altText'
  | 'featuredImage___height'
  | 'featuredImage___id'
  | 'featuredImage___originalSrc'
  | 'featuredImage___transformedSrc'
  | 'featuredImage___width'
  | 'featuredMedia___alt'
  | 'featuredMedia___mediaContentType'
  | 'featuredMedia___preview___image___altText'
  | 'featuredMedia___preview___image___height'
  | 'featuredMedia___preview___image___id'
  | 'featuredMedia___preview___image___originalSrc'
  | 'featuredMedia___preview___image___transformedSrc'
  | 'featuredMedia___preview___image___width'
  | 'featuredMedia___preview___status'
  | 'featuredMedia___status'
  | 'giftCardTemplateSuffix'
  | 'handle'
  | 'hasOnlyDefaultVariant'
  | 'hasOutOfStockVariants'
  | 'isGiftCard'
  | 'legacyResourceId'
  | 'mediaCount'
  | 'onlineStorePreviewUrl'
  | 'options'
  | 'options___id'
  | 'options___name'
  | 'options___position'
  | 'options___values'
  | 'priceRangeV2___maxVariantPrice___amount'
  | 'priceRangeV2___maxVariantPrice___currencyCode'
  | 'priceRangeV2___minVariantPrice___amount'
  | 'priceRangeV2___minVariantPrice___currencyCode'
  | 'productType'
  | 'publishedAt'
  | 'requiresSellingPlan'
  | 'sellingPlanGroupCount'
  | 'status'
  | 'templateSuffix'
  | 'title'
  | 'totalInventory'
  | 'totalVariants'
  | 'tracksInventory'
  | 'updatedAt'
  | 'vendor'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductEdge>;
  nodes: Array<ShopifyProduct>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductGroupConnectionDistinctArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionMaxArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionMinArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionSumArgs = {
  field: ShopifyProductFieldsEnum;
};


export type ShopifyProductGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductFieldsEnum;
};

export type ShopifyProductSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyProductFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyProductImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductImageEdge>;
  nodes: Array<ShopifyProductImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductImageGroupConnection>;
};


export type ShopifyProductImageConnectionDistinctArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionMaxArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionMinArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionSumArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductImageFieldsEnum;
};

export type ShopifyProductImageEdge = {
  next?: Maybe<ShopifyProductImage>;
  node: ShopifyProductImage;
  previous?: Maybe<ShopifyProductImage>;
};

export type ShopifyProductImageFieldsEnum =
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'altText'
  | 'height'
  | 'id'
  | 'originalSrc'
  | 'transformedSrc'
  | 'width'
  | 'src'
  | '_xparentId'
  | 'productId'
  | 'shopifyId'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductImageEdge>;
  nodes: Array<ShopifyProductImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductImageGroupConnectionDistinctArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionMaxArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionMinArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionSumArgs = {
  field: ShopifyProductImageFieldsEnum;
};


export type ShopifyProductImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductImageFieldsEnum;
};

export type ShopifyProductImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyProductImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
};


export type ShopifyProductVariantConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionMaxArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionMinArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionSumArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantEdge = {
  next?: Maybe<ShopifyProductVariant>;
  node: ShopifyProductVariant;
  previous?: Maybe<ShopifyProductVariant>;
};

export type ShopifyProductVariantFieldsEnum =
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'metafields'
  | 'metafields___createdAt'
  | 'metafields___description'
  | 'metafields___id'
  | 'metafields___key'
  | 'metafields___namespace'
  | 'metafields___ownerType'
  | 'metafields___updatedAt'
  | 'metafields___value'
  | 'metafields___type'
  | 'metafields___valueType'
  | 'metafields___productVariant___product___tags'
  | 'metafields___productVariant___product___variants'
  | 'metafields___productVariant___product___metafields'
  | 'metafields___productVariant___product___images'
  | 'metafields___productVariant___product___storefrontId'
  | 'metafields___productVariant___product___createdAt'
  | 'metafields___productVariant___product___description'
  | 'metafields___productVariant___product___descriptionHtml'
  | 'metafields___productVariant___product___giftCardTemplateSuffix'
  | 'metafields___productVariant___product___handle'
  | 'metafields___productVariant___product___hasOnlyDefaultVariant'
  | 'metafields___productVariant___product___hasOutOfStockVariants'
  | 'metafields___productVariant___product___isGiftCard'
  | 'metafields___productVariant___product___legacyResourceId'
  | 'metafields___productVariant___product___mediaCount'
  | 'metafields___productVariant___product___onlineStorePreviewUrl'
  | 'metafields___productVariant___product___options'
  | 'metafields___productVariant___product___productType'
  | 'metafields___productVariant___product___publishedAt'
  | 'metafields___productVariant___product___requiresSellingPlan'
  | 'metafields___productVariant___product___sellingPlanGroupCount'
  | 'metafields___productVariant___product___status'
  | 'metafields___productVariant___product___templateSuffix'
  | 'metafields___productVariant___product___title'
  | 'metafields___productVariant___product___totalInventory'
  | 'metafields___productVariant___product___totalVariants'
  | 'metafields___productVariant___product___tracksInventory'
  | 'metafields___productVariant___product___updatedAt'
  | 'metafields___productVariant___product___vendor'
  | 'metafields___productVariant___product___shopifyId'
  | 'metafields___productVariant___product___id'
  | 'metafields___productVariant___product___children'
  | 'metafields___productVariant___metafields'
  | 'metafields___productVariant___metafields___createdAt'
  | 'metafields___productVariant___metafields___description'
  | 'metafields___productVariant___metafields___id'
  | 'metafields___productVariant___metafields___key'
  | 'metafields___productVariant___metafields___namespace'
  | 'metafields___productVariant___metafields___ownerType'
  | 'metafields___productVariant___metafields___updatedAt'
  | 'metafields___productVariant___metafields___value'
  | 'metafields___productVariant___metafields___type'
  | 'metafields___productVariant___metafields___valueType'
  | 'metafields___productVariant___metafields___children'
  | 'metafields___productVariant___availableForSale'
  | 'metafields___productVariant___barcode'
  | 'metafields___productVariant___compareAtPrice'
  | 'metafields___productVariant___createdAt'
  | 'metafields___productVariant___displayName'
  | 'metafields___productVariant___inventoryPolicy'
  | 'metafields___productVariant___inventoryQuantity'
  | 'metafields___productVariant___legacyResourceId'
  | 'metafields___productVariant___position'
  | 'metafields___productVariant___price'
  | 'metafields___productVariant___selectedOptions'
  | 'metafields___productVariant___selectedOptions___name'
  | 'metafields___productVariant___selectedOptions___value'
  | 'metafields___productVariant___sellingPlanGroupCount'
  | 'metafields___productVariant___sku'
  | 'metafields___productVariant___storefrontId'
  | 'metafields___productVariant___taxable'
  | 'metafields___productVariant___title'
  | 'metafields___productVariant___updatedAt'
  | 'metafields___productVariant___weight'
  | 'metafields___productVariant___weightUnit'
  | 'metafields___productVariant____xparentId'
  | 'metafields___productVariant___productId'
  | 'metafields___productVariant___shopifyId'
  | 'metafields___productVariant___id'
  | 'metafields___productVariant___parent___id'
  | 'metafields___productVariant___parent___children'
  | 'metafields___productVariant___children'
  | 'metafields___productVariant___children___id'
  | 'metafields___productVariant___children___children'
  | 'metafields___productVariant___internal___content'
  | 'metafields___productVariant___internal___contentDigest'
  | 'metafields___productVariant___internal___description'
  | 'metafields___productVariant___internal___fieldOwners'
  | 'metafields___productVariant___internal___ignoreType'
  | 'metafields___productVariant___internal___mediaType'
  | 'metafields___productVariant___internal___owner'
  | 'metafields___productVariant___internal___type'
  | 'metafields___parent___id'
  | 'metafields___parent___parent___id'
  | 'metafields___parent___parent___children'
  | 'metafields___parent___children'
  | 'metafields___parent___children___id'
  | 'metafields___parent___children___children'
  | 'metafields___parent___internal___content'
  | 'metafields___parent___internal___contentDigest'
  | 'metafields___parent___internal___description'
  | 'metafields___parent___internal___fieldOwners'
  | 'metafields___parent___internal___ignoreType'
  | 'metafields___parent___internal___mediaType'
  | 'metafields___parent___internal___owner'
  | 'metafields___parent___internal___type'
  | 'metafields___children'
  | 'metafields___children___id'
  | 'metafields___children___parent___id'
  | 'metafields___children___parent___children'
  | 'metafields___children___children'
  | 'metafields___children___children___id'
  | 'metafields___children___children___children'
  | 'metafields___children___internal___content'
  | 'metafields___children___internal___contentDigest'
  | 'metafields___children___internal___description'
  | 'metafields___children___internal___fieldOwners'
  | 'metafields___children___internal___ignoreType'
  | 'metafields___children___internal___mediaType'
  | 'metafields___children___internal___owner'
  | 'metafields___children___internal___type'
  | 'metafields___internal___content'
  | 'metafields___internal___contentDigest'
  | 'metafields___internal___description'
  | 'metafields___internal___fieldOwners'
  | 'metafields___internal___ignoreType'
  | 'metafields___internal___mediaType'
  | 'metafields___internal___owner'
  | 'metafields___internal___type'
  | 'availableForSale'
  | 'barcode'
  | 'compareAtPrice'
  | 'createdAt'
  | 'displayName'
  | 'inventoryPolicy'
  | 'inventoryQuantity'
  | 'legacyResourceId'
  | 'position'
  | 'price'
  | 'selectedOptions'
  | 'selectedOptions___name'
  | 'selectedOptions___value'
  | 'sellingPlanGroupCount'
  | 'sku'
  | 'storefrontId'
  | 'taxable'
  | 'title'
  | 'updatedAt'
  | 'weight'
  | 'weightUnit'
  | '_xparentId'
  | 'productId'
  | 'shopifyId'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductVariantGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantEdge>;
  nodes: Array<ShopifyProductVariant>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionMaxArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionMinArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionSumArgs = {
  field: ShopifyProductVariantFieldsEnum;
};


export type ShopifyProductVariantGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantFieldsEnum;
};

export type ShopifyProductVariantSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyProductVariantFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyMetafieldInterfaceConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldInterfaceEdge>;
  nodes: Array<ShopifyMetafieldInterface>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldInterfaceGroupConnection>;
};


export type ShopifyMetafieldInterfaceConnectionDistinctArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionMaxArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionMinArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionSumArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMetafieldInterfaceFieldsEnum;
};

export type ShopifyMetafieldInterfaceEdge = {
  next?: Maybe<ShopifyMetafieldInterface>;
  node: ShopifyMetafieldInterface;
  previous?: Maybe<ShopifyMetafieldInterface>;
};

export type ShopifyMetafieldInterfaceFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyMetafieldInterfaceGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyMetafieldInterfaceEdge>;
  nodes: Array<ShopifyMetafieldInterface>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyMetafieldInterfaceGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyMetafieldInterfaceGroupConnectionDistinctArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionMaxArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionMinArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionSumArgs = {
  field: ShopifyMetafieldInterfaceFieldsEnum;
};


export type ShopifyMetafieldInterfaceGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyMetafieldInterfaceFieldsEnum;
};

export type ShopifyMetafieldInterfaceFilterInput = {
  createdAt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  key?: InputMaybe<StringQueryOperatorInput>;
  namespace?: InputMaybe<StringQueryOperatorInput>;
  ownerType?: InputMaybe<StringQueryOperatorInput>;
  updatedAt?: InputMaybe<DateQueryOperatorInput>;
  value?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  valueType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ShopifyMetafieldInterfaceSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyMetafieldInterfaceFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyProductMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductMetafieldGroupConnection>;
};


export type ShopifyProductMetafieldConnectionDistinctArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionMaxArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionMinArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionSumArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductMetafieldFieldsEnum;
};

export type ShopifyProductMetafieldEdge = {
  next?: Maybe<ShopifyProductMetafield>;
  node: ShopifyProductMetafield;
  previous?: Maybe<ShopifyProductMetafield>;
};

export type ShopifyProductMetafieldFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'product___tags'
  | 'product___variants'
  | 'product___variants___product___tags'
  | 'product___variants___product___variants'
  | 'product___variants___product___metafields'
  | 'product___variants___product___images'
  | 'product___variants___product___storefrontId'
  | 'product___variants___product___createdAt'
  | 'product___variants___product___description'
  | 'product___variants___product___descriptionHtml'
  | 'product___variants___product___giftCardTemplateSuffix'
  | 'product___variants___product___handle'
  | 'product___variants___product___hasOnlyDefaultVariant'
  | 'product___variants___product___hasOutOfStockVariants'
  | 'product___variants___product___isGiftCard'
  | 'product___variants___product___legacyResourceId'
  | 'product___variants___product___mediaCount'
  | 'product___variants___product___onlineStorePreviewUrl'
  | 'product___variants___product___options'
  | 'product___variants___product___productType'
  | 'product___variants___product___publishedAt'
  | 'product___variants___product___requiresSellingPlan'
  | 'product___variants___product___sellingPlanGroupCount'
  | 'product___variants___product___status'
  | 'product___variants___product___templateSuffix'
  | 'product___variants___product___title'
  | 'product___variants___product___totalInventory'
  | 'product___variants___product___totalVariants'
  | 'product___variants___product___tracksInventory'
  | 'product___variants___product___updatedAt'
  | 'product___variants___product___vendor'
  | 'product___variants___product___shopifyId'
  | 'product___variants___product___id'
  | 'product___variants___product___children'
  | 'product___variants___metafields'
  | 'product___variants___metafields___createdAt'
  | 'product___variants___metafields___description'
  | 'product___variants___metafields___id'
  | 'product___variants___metafields___key'
  | 'product___variants___metafields___namespace'
  | 'product___variants___metafields___ownerType'
  | 'product___variants___metafields___updatedAt'
  | 'product___variants___metafields___value'
  | 'product___variants___metafields___type'
  | 'product___variants___metafields___valueType'
  | 'product___variants___metafields___children'
  | 'product___variants___availableForSale'
  | 'product___variants___barcode'
  | 'product___variants___compareAtPrice'
  | 'product___variants___createdAt'
  | 'product___variants___displayName'
  | 'product___variants___inventoryPolicy'
  | 'product___variants___inventoryQuantity'
  | 'product___variants___legacyResourceId'
  | 'product___variants___position'
  | 'product___variants___price'
  | 'product___variants___selectedOptions'
  | 'product___variants___selectedOptions___name'
  | 'product___variants___selectedOptions___value'
  | 'product___variants___sellingPlanGroupCount'
  | 'product___variants___sku'
  | 'product___variants___storefrontId'
  | 'product___variants___taxable'
  | 'product___variants___title'
  | 'product___variants___updatedAt'
  | 'product___variants___weight'
  | 'product___variants___weightUnit'
  | 'product___variants____xparentId'
  | 'product___variants___productId'
  | 'product___variants___shopifyId'
  | 'product___variants___id'
  | 'product___variants___parent___id'
  | 'product___variants___parent___children'
  | 'product___variants___children'
  | 'product___variants___children___id'
  | 'product___variants___children___children'
  | 'product___variants___internal___content'
  | 'product___variants___internal___contentDigest'
  | 'product___variants___internal___description'
  | 'product___variants___internal___fieldOwners'
  | 'product___variants___internal___ignoreType'
  | 'product___variants___internal___mediaType'
  | 'product___variants___internal___owner'
  | 'product___variants___internal___type'
  | 'product___metafields'
  | 'product___metafields___createdAt'
  | 'product___metafields___description'
  | 'product___metafields___id'
  | 'product___metafields___key'
  | 'product___metafields___namespace'
  | 'product___metafields___ownerType'
  | 'product___metafields___updatedAt'
  | 'product___metafields___value'
  | 'product___metafields___type'
  | 'product___metafields___valueType'
  | 'product___metafields___product___tags'
  | 'product___metafields___product___variants'
  | 'product___metafields___product___metafields'
  | 'product___metafields___product___images'
  | 'product___metafields___product___storefrontId'
  | 'product___metafields___product___createdAt'
  | 'product___metafields___product___description'
  | 'product___metafields___product___descriptionHtml'
  | 'product___metafields___product___giftCardTemplateSuffix'
  | 'product___metafields___product___handle'
  | 'product___metafields___product___hasOnlyDefaultVariant'
  | 'product___metafields___product___hasOutOfStockVariants'
  | 'product___metafields___product___isGiftCard'
  | 'product___metafields___product___legacyResourceId'
  | 'product___metafields___product___mediaCount'
  | 'product___metafields___product___onlineStorePreviewUrl'
  | 'product___metafields___product___options'
  | 'product___metafields___product___productType'
  | 'product___metafields___product___publishedAt'
  | 'product___metafields___product___requiresSellingPlan'
  | 'product___metafields___product___sellingPlanGroupCount'
  | 'product___metafields___product___status'
  | 'product___metafields___product___templateSuffix'
  | 'product___metafields___product___title'
  | 'product___metafields___product___totalInventory'
  | 'product___metafields___product___totalVariants'
  | 'product___metafields___product___tracksInventory'
  | 'product___metafields___product___updatedAt'
  | 'product___metafields___product___vendor'
  | 'product___metafields___product___shopifyId'
  | 'product___metafields___product___id'
  | 'product___metafields___product___children'
  | 'product___metafields___parent___id'
  | 'product___metafields___parent___children'
  | 'product___metafields___children'
  | 'product___metafields___children___id'
  | 'product___metafields___children___children'
  | 'product___metafields___internal___content'
  | 'product___metafields___internal___contentDigest'
  | 'product___metafields___internal___description'
  | 'product___metafields___internal___fieldOwners'
  | 'product___metafields___internal___ignoreType'
  | 'product___metafields___internal___mediaType'
  | 'product___metafields___internal___owner'
  | 'product___metafields___internal___type'
  | 'product___images'
  | 'product___images___product___tags'
  | 'product___images___product___variants'
  | 'product___images___product___metafields'
  | 'product___images___product___images'
  | 'product___images___product___storefrontId'
  | 'product___images___product___createdAt'
  | 'product___images___product___description'
  | 'product___images___product___descriptionHtml'
  | 'product___images___product___giftCardTemplateSuffix'
  | 'product___images___product___handle'
  | 'product___images___product___hasOnlyDefaultVariant'
  | 'product___images___product___hasOutOfStockVariants'
  | 'product___images___product___isGiftCard'
  | 'product___images___product___legacyResourceId'
  | 'product___images___product___mediaCount'
  | 'product___images___product___onlineStorePreviewUrl'
  | 'product___images___product___options'
  | 'product___images___product___productType'
  | 'product___images___product___publishedAt'
  | 'product___images___product___requiresSellingPlan'
  | 'product___images___product___sellingPlanGroupCount'
  | 'product___images___product___status'
  | 'product___images___product___templateSuffix'
  | 'product___images___product___title'
  | 'product___images___product___totalInventory'
  | 'product___images___product___totalVariants'
  | 'product___images___product___tracksInventory'
  | 'product___images___product___updatedAt'
  | 'product___images___product___vendor'
  | 'product___images___product___shopifyId'
  | 'product___images___product___id'
  | 'product___images___product___children'
  | 'product___images___altText'
  | 'product___images___height'
  | 'product___images___id'
  | 'product___images___originalSrc'
  | 'product___images___transformedSrc'
  | 'product___images___width'
  | 'product___images___src'
  | 'product___images____xparentId'
  | 'product___images___productId'
  | 'product___images___shopifyId'
  | 'product___images___parent___id'
  | 'product___images___parent___children'
  | 'product___images___children'
  | 'product___images___children___id'
  | 'product___images___children___children'
  | 'product___images___internal___content'
  | 'product___images___internal___contentDigest'
  | 'product___images___internal___description'
  | 'product___images___internal___fieldOwners'
  | 'product___images___internal___ignoreType'
  | 'product___images___internal___mediaType'
  | 'product___images___internal___owner'
  | 'product___images___internal___type'
  | 'product___storefrontId'
  | 'product___createdAt'
  | 'product___description'
  | 'product___descriptionHtml'
  | 'product___featuredImage___altText'
  | 'product___featuredImage___height'
  | 'product___featuredImage___id'
  | 'product___featuredImage___originalSrc'
  | 'product___featuredImage___transformedSrc'
  | 'product___featuredImage___width'
  | 'product___featuredMedia___alt'
  | 'product___featuredMedia___mediaContentType'
  | 'product___featuredMedia___preview___status'
  | 'product___featuredMedia___status'
  | 'product___giftCardTemplateSuffix'
  | 'product___handle'
  | 'product___hasOnlyDefaultVariant'
  | 'product___hasOutOfStockVariants'
  | 'product___isGiftCard'
  | 'product___legacyResourceId'
  | 'product___mediaCount'
  | 'product___onlineStorePreviewUrl'
  | 'product___options'
  | 'product___options___id'
  | 'product___options___name'
  | 'product___options___position'
  | 'product___options___values'
  | 'product___priceRangeV2___maxVariantPrice___amount'
  | 'product___priceRangeV2___maxVariantPrice___currencyCode'
  | 'product___priceRangeV2___minVariantPrice___amount'
  | 'product___priceRangeV2___minVariantPrice___currencyCode'
  | 'product___productType'
  | 'product___publishedAt'
  | 'product___requiresSellingPlan'
  | 'product___sellingPlanGroupCount'
  | 'product___status'
  | 'product___templateSuffix'
  | 'product___title'
  | 'product___totalInventory'
  | 'product___totalVariants'
  | 'product___tracksInventory'
  | 'product___updatedAt'
  | 'product___vendor'
  | 'product___shopifyId'
  | 'product___id'
  | 'product___parent___id'
  | 'product___parent___parent___id'
  | 'product___parent___parent___children'
  | 'product___parent___children'
  | 'product___parent___children___id'
  | 'product___parent___children___children'
  | 'product___parent___internal___content'
  | 'product___parent___internal___contentDigest'
  | 'product___parent___internal___description'
  | 'product___parent___internal___fieldOwners'
  | 'product___parent___internal___ignoreType'
  | 'product___parent___internal___mediaType'
  | 'product___parent___internal___owner'
  | 'product___parent___internal___type'
  | 'product___children'
  | 'product___children___id'
  | 'product___children___parent___id'
  | 'product___children___parent___children'
  | 'product___children___children'
  | 'product___children___children___id'
  | 'product___children___children___children'
  | 'product___children___internal___content'
  | 'product___children___internal___contentDigest'
  | 'product___children___internal___description'
  | 'product___children___internal___fieldOwners'
  | 'product___children___internal___ignoreType'
  | 'product___children___internal___mediaType'
  | 'product___children___internal___owner'
  | 'product___children___internal___type'
  | 'product___internal___content'
  | 'product___internal___contentDigest'
  | 'product___internal___description'
  | 'product___internal___fieldOwners'
  | 'product___internal___ignoreType'
  | 'product___internal___mediaType'
  | 'product___internal___owner'
  | 'product___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductMetafieldEdge>;
  nodes: Array<ShopifyProductMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionMaxArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionMinArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionSumArgs = {
  field: ShopifyProductMetafieldFieldsEnum;
};


export type ShopifyProductMetafieldGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductMetafieldFieldsEnum;
};

export type ShopifyProductMetafieldSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyProductMetafieldFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ShopifyProductVariantMetafieldConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantMetafieldEdge>;
  nodes: Array<ShopifyProductVariantMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantMetafieldGroupConnection>;
};


export type ShopifyProductVariantMetafieldConnectionDistinctArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionMaxArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionMinArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionSumArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantMetafieldFieldsEnum;
};

export type ShopifyProductVariantMetafieldEdge = {
  next?: Maybe<ShopifyProductVariantMetafield>;
  node: ShopifyProductVariantMetafield;
  previous?: Maybe<ShopifyProductVariantMetafield>;
};

export type ShopifyProductVariantMetafieldFieldsEnum =
  | 'createdAt'
  | 'description'
  | 'id'
  | 'key'
  | 'namespace'
  | 'ownerType'
  | 'updatedAt'
  | 'value'
  | 'type'
  | 'valueType'
  | 'productVariant___product___tags'
  | 'productVariant___product___variants'
  | 'productVariant___product___variants___metafields'
  | 'productVariant___product___variants___availableForSale'
  | 'productVariant___product___variants___barcode'
  | 'productVariant___product___variants___compareAtPrice'
  | 'productVariant___product___variants___createdAt'
  | 'productVariant___product___variants___displayName'
  | 'productVariant___product___variants___inventoryPolicy'
  | 'productVariant___product___variants___inventoryQuantity'
  | 'productVariant___product___variants___legacyResourceId'
  | 'productVariant___product___variants___position'
  | 'productVariant___product___variants___price'
  | 'productVariant___product___variants___selectedOptions'
  | 'productVariant___product___variants___sellingPlanGroupCount'
  | 'productVariant___product___variants___sku'
  | 'productVariant___product___variants___storefrontId'
  | 'productVariant___product___variants___taxable'
  | 'productVariant___product___variants___title'
  | 'productVariant___product___variants___updatedAt'
  | 'productVariant___product___variants___weight'
  | 'productVariant___product___variants___weightUnit'
  | 'productVariant___product___variants____xparentId'
  | 'productVariant___product___variants___productId'
  | 'productVariant___product___variants___shopifyId'
  | 'productVariant___product___variants___id'
  | 'productVariant___product___variants___children'
  | 'productVariant___product___metafields'
  | 'productVariant___product___metafields___createdAt'
  | 'productVariant___product___metafields___description'
  | 'productVariant___product___metafields___id'
  | 'productVariant___product___metafields___key'
  | 'productVariant___product___metafields___namespace'
  | 'productVariant___product___metafields___ownerType'
  | 'productVariant___product___metafields___updatedAt'
  | 'productVariant___product___metafields___value'
  | 'productVariant___product___metafields___type'
  | 'productVariant___product___metafields___valueType'
  | 'productVariant___product___metafields___children'
  | 'productVariant___product___images'
  | 'productVariant___product___images___altText'
  | 'productVariant___product___images___height'
  | 'productVariant___product___images___id'
  | 'productVariant___product___images___originalSrc'
  | 'productVariant___product___images___transformedSrc'
  | 'productVariant___product___images___width'
  | 'productVariant___product___images___src'
  | 'productVariant___product___images____xparentId'
  | 'productVariant___product___images___productId'
  | 'productVariant___product___images___shopifyId'
  | 'productVariant___product___images___children'
  | 'productVariant___product___storefrontId'
  | 'productVariant___product___createdAt'
  | 'productVariant___product___description'
  | 'productVariant___product___descriptionHtml'
  | 'productVariant___product___featuredImage___altText'
  | 'productVariant___product___featuredImage___height'
  | 'productVariant___product___featuredImage___id'
  | 'productVariant___product___featuredImage___originalSrc'
  | 'productVariant___product___featuredImage___transformedSrc'
  | 'productVariant___product___featuredImage___width'
  | 'productVariant___product___featuredMedia___alt'
  | 'productVariant___product___featuredMedia___mediaContentType'
  | 'productVariant___product___featuredMedia___status'
  | 'productVariant___product___giftCardTemplateSuffix'
  | 'productVariant___product___handle'
  | 'productVariant___product___hasOnlyDefaultVariant'
  | 'productVariant___product___hasOutOfStockVariants'
  | 'productVariant___product___isGiftCard'
  | 'productVariant___product___legacyResourceId'
  | 'productVariant___product___mediaCount'
  | 'productVariant___product___onlineStorePreviewUrl'
  | 'productVariant___product___options'
  | 'productVariant___product___options___id'
  | 'productVariant___product___options___name'
  | 'productVariant___product___options___position'
  | 'productVariant___product___options___values'
  | 'productVariant___product___productType'
  | 'productVariant___product___publishedAt'
  | 'productVariant___product___requiresSellingPlan'
  | 'productVariant___product___sellingPlanGroupCount'
  | 'productVariant___product___status'
  | 'productVariant___product___templateSuffix'
  | 'productVariant___product___title'
  | 'productVariant___product___totalInventory'
  | 'productVariant___product___totalVariants'
  | 'productVariant___product___tracksInventory'
  | 'productVariant___product___updatedAt'
  | 'productVariant___product___vendor'
  | 'productVariant___product___shopifyId'
  | 'productVariant___product___id'
  | 'productVariant___product___parent___id'
  | 'productVariant___product___parent___children'
  | 'productVariant___product___children'
  | 'productVariant___product___children___id'
  | 'productVariant___product___children___children'
  | 'productVariant___product___internal___content'
  | 'productVariant___product___internal___contentDigest'
  | 'productVariant___product___internal___description'
  | 'productVariant___product___internal___fieldOwners'
  | 'productVariant___product___internal___ignoreType'
  | 'productVariant___product___internal___mediaType'
  | 'productVariant___product___internal___owner'
  | 'productVariant___product___internal___type'
  | 'productVariant___metafields'
  | 'productVariant___metafields___createdAt'
  | 'productVariant___metafields___description'
  | 'productVariant___metafields___id'
  | 'productVariant___metafields___key'
  | 'productVariant___metafields___namespace'
  | 'productVariant___metafields___ownerType'
  | 'productVariant___metafields___updatedAt'
  | 'productVariant___metafields___value'
  | 'productVariant___metafields___type'
  | 'productVariant___metafields___valueType'
  | 'productVariant___metafields___productVariant___metafields'
  | 'productVariant___metafields___productVariant___availableForSale'
  | 'productVariant___metafields___productVariant___barcode'
  | 'productVariant___metafields___productVariant___compareAtPrice'
  | 'productVariant___metafields___productVariant___createdAt'
  | 'productVariant___metafields___productVariant___displayName'
  | 'productVariant___metafields___productVariant___inventoryPolicy'
  | 'productVariant___metafields___productVariant___inventoryQuantity'
  | 'productVariant___metafields___productVariant___legacyResourceId'
  | 'productVariant___metafields___productVariant___position'
  | 'productVariant___metafields___productVariant___price'
  | 'productVariant___metafields___productVariant___selectedOptions'
  | 'productVariant___metafields___productVariant___sellingPlanGroupCount'
  | 'productVariant___metafields___productVariant___sku'
  | 'productVariant___metafields___productVariant___storefrontId'
  | 'productVariant___metafields___productVariant___taxable'
  | 'productVariant___metafields___productVariant___title'
  | 'productVariant___metafields___productVariant___updatedAt'
  | 'productVariant___metafields___productVariant___weight'
  | 'productVariant___metafields___productVariant___weightUnit'
  | 'productVariant___metafields___productVariant____xparentId'
  | 'productVariant___metafields___productVariant___productId'
  | 'productVariant___metafields___productVariant___shopifyId'
  | 'productVariant___metafields___productVariant___id'
  | 'productVariant___metafields___productVariant___children'
  | 'productVariant___metafields___parent___id'
  | 'productVariant___metafields___parent___children'
  | 'productVariant___metafields___children'
  | 'productVariant___metafields___children___id'
  | 'productVariant___metafields___children___children'
  | 'productVariant___metafields___internal___content'
  | 'productVariant___metafields___internal___contentDigest'
  | 'productVariant___metafields___internal___description'
  | 'productVariant___metafields___internal___fieldOwners'
  | 'productVariant___metafields___internal___ignoreType'
  | 'productVariant___metafields___internal___mediaType'
  | 'productVariant___metafields___internal___owner'
  | 'productVariant___metafields___internal___type'
  | 'productVariant___availableForSale'
  | 'productVariant___barcode'
  | 'productVariant___compareAtPrice'
  | 'productVariant___createdAt'
  | 'productVariant___displayName'
  | 'productVariant___inventoryPolicy'
  | 'productVariant___inventoryQuantity'
  | 'productVariant___legacyResourceId'
  | 'productVariant___position'
  | 'productVariant___price'
  | 'productVariant___selectedOptions'
  | 'productVariant___selectedOptions___name'
  | 'productVariant___selectedOptions___value'
  | 'productVariant___sellingPlanGroupCount'
  | 'productVariant___sku'
  | 'productVariant___storefrontId'
  | 'productVariant___taxable'
  | 'productVariant___title'
  | 'productVariant___updatedAt'
  | 'productVariant___weight'
  | 'productVariant___weightUnit'
  | 'productVariant____xparentId'
  | 'productVariant___productId'
  | 'productVariant___shopifyId'
  | 'productVariant___id'
  | 'productVariant___parent___id'
  | 'productVariant___parent___parent___id'
  | 'productVariant___parent___parent___children'
  | 'productVariant___parent___children'
  | 'productVariant___parent___children___id'
  | 'productVariant___parent___children___children'
  | 'productVariant___parent___internal___content'
  | 'productVariant___parent___internal___contentDigest'
  | 'productVariant___parent___internal___description'
  | 'productVariant___parent___internal___fieldOwners'
  | 'productVariant___parent___internal___ignoreType'
  | 'productVariant___parent___internal___mediaType'
  | 'productVariant___parent___internal___owner'
  | 'productVariant___parent___internal___type'
  | 'productVariant___children'
  | 'productVariant___children___id'
  | 'productVariant___children___parent___id'
  | 'productVariant___children___parent___children'
  | 'productVariant___children___children'
  | 'productVariant___children___children___id'
  | 'productVariant___children___children___children'
  | 'productVariant___children___internal___content'
  | 'productVariant___children___internal___contentDigest'
  | 'productVariant___children___internal___description'
  | 'productVariant___children___internal___fieldOwners'
  | 'productVariant___children___internal___ignoreType'
  | 'productVariant___children___internal___mediaType'
  | 'productVariant___children___internal___owner'
  | 'productVariant___children___internal___type'
  | 'productVariant___internal___content'
  | 'productVariant___internal___contentDigest'
  | 'productVariant___internal___description'
  | 'productVariant___internal___fieldOwners'
  | 'productVariant___internal___ignoreType'
  | 'productVariant___internal___mediaType'
  | 'productVariant___internal___owner'
  | 'productVariant___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ShopifyProductVariantMetafieldGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ShopifyProductVariantMetafieldEdge>;
  nodes: Array<ShopifyProductVariantMetafield>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ShopifyProductVariantMetafieldGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ShopifyProductVariantMetafieldGroupConnectionDistinctArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionMaxArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionMinArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionSumArgs = {
  field: ShopifyProductVariantMetafieldFieldsEnum;
};


export type ShopifyProductVariantMetafieldGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ShopifyProductVariantMetafieldFieldsEnum;
};

export type ShopifyProductVariantMetafieldSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ShopifyProductVariantMetafieldFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type StaticImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
};


export type StaticImageConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageEdge = {
  next?: Maybe<StaticImage>;
  node: StaticImage;
  previous?: Maybe<StaticImage>;
};

export type StaticImageFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'sourceInstanceName'
  | 'relativePath'
  | 'extension'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'absolutePath'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'rdev'
  | 'blksize'
  | 'ino'
  | 'size'
  | 'blocks'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'birthtimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime';

export type StaticImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<StaticImageEdge>;
  nodes: Array<StaticImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<StaticImageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};


export type StaticImageGroupConnectionDistinctArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionMaxArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionMinArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionSumArgs = {
  field: StaticImageFieldsEnum;
};


export type StaticImageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: StaticImageFieldsEnum;
};

export type StaticImageFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
};

export type StaticImageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<StaticImageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { site?: { siteMetadata?: { title?: string | null | undefined, description?: string | null | undefined, author?: string | null | undefined } | null | undefined } | null | undefined };

export type SiteTitleQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type SiteTitleQueryQuery = { site?: { siteMetadata?: { title?: string | null | undefined } | null | undefined } | null | undefined };

export type GetShopItemsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopItemsQuery = { allShopifyProduct: { totalCount: number, edges: Array<{ node: { id: string, title?: string | null | undefined, description?: string | null | undefined, handle?: string | null | undefined, shopifyId?: string | null | undefined, priceRangeV2?: { maxVariantPrice?: { amount?: string | null | undefined, currencyCode?: string | null | undefined } | null | undefined } | null | undefined, images?: Array<{ src?: string | null | undefined } | null | undefined> | null | undefined, variants?: Array<{ shopifyId?: string | null | undefined } | null | undefined> | null | undefined } }> } };

export type GatsbyImageSharpFixedFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebpFragment = { base64?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string };

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { width: number, height: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined };

export type GatsbyImageSharpFluidFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number, maxWidth: number };

export type GatsbyImageSharpFluid_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebpFragment = { base64?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { tracedSVG?: string | null | undefined, aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, sizes: string };

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { aspectRatio: number, src: string, srcSet: string, srcWebp?: string | null | undefined, srcSetWebp?: string | null | undefined, sizes: string };
