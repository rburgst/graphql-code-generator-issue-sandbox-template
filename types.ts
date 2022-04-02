export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};

export type AvifOptions = {
  lossless?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  ne?: InputMaybe<Scalars['Boolean']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  changeTime: Scalars['Date'];
  children: Array<Node>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type DirectoryAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  ChangeTime = 'changeTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type DirectoryFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<DirectoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryGroupConnectionGroupArgs = {
  field: DirectoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
  shadow: Scalars['String'];
};

export type File = Node & {
  __typename?: 'File';
  absolutePath: Scalars['String'];
  accessTime: Scalars['Date'];
  atime: Scalars['Date'];
  atimeMs: Scalars['Float'];
  base: Scalars['String'];
  birthTime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  changeTime: Scalars['Date'];
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  children: Array<Node>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  ctime: Scalars['Date'];
  ctimeMs: Scalars['Float'];
  dev: Scalars['Int'];
  dir: Scalars['String'];
  ext: Scalars['String'];
  extension: Scalars['String'];
  gid: Scalars['Int'];
  hash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ino: Scalars['Float'];
  internal: Internal;
  mode: Scalars['Int'];
  modifiedTime: Scalars['Date'];
  mtime: Scalars['Date'];
  mtimeMs: Scalars['Float'];
  name: Scalars['String'];
  nlink: Scalars['Int'];
  parent?: Maybe<Node>;
  prettySize: Scalars['String'];
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  rdev: Scalars['Int'];
  relativeDirectory: Scalars['String'];
  relativePath: Scalars['String'];
  root: Scalars['String'];
  size: Scalars['Int'];
  sourceInstanceName: Scalars['String'];
  uid: Scalars['Int'];
};


export type FileAccessTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileModifiedTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  AbsolutePath = 'absolutePath',
  AccessTime = 'accessTime',
  Atime = 'atime',
  AtimeMs = 'atimeMs',
  Base = 'base',
  BirthTime = 'birthTime',
  Birthtime = 'birthtime',
  BirthtimeMs = 'birthtimeMs',
  Blksize = 'blksize',
  Blocks = 'blocks',
  ChangeTime = 'changeTime',
  ChildImageSharpChildren = 'childImageSharp___children',
  ChildImageSharpChildrenChildren = 'childImageSharp___children___children',
  ChildImageSharpChildrenChildrenChildren = 'childImageSharp___children___children___children',
  ChildImageSharpChildrenChildrenId = 'childImageSharp___children___children___id',
  ChildImageSharpChildrenId = 'childImageSharp___children___id',
  ChildImageSharpChildrenInternalContent = 'childImageSharp___children___internal___content',
  ChildImageSharpChildrenInternalContentDigest = 'childImageSharp___children___internal___contentDigest',
  ChildImageSharpChildrenInternalDescription = 'childImageSharp___children___internal___description',
  ChildImageSharpChildrenInternalFieldOwners = 'childImageSharp___children___internal___fieldOwners',
  ChildImageSharpChildrenInternalIgnoreType = 'childImageSharp___children___internal___ignoreType',
  ChildImageSharpChildrenInternalMediaType = 'childImageSharp___children___internal___mediaType',
  ChildImageSharpChildrenInternalOwner = 'childImageSharp___children___internal___owner',
  ChildImageSharpChildrenInternalType = 'childImageSharp___children___internal___type',
  ChildImageSharpChildrenParentChildren = 'childImageSharp___children___parent___children',
  ChildImageSharpChildrenParentId = 'childImageSharp___children___parent___id',
  ChildImageSharpFixedAspectRatio = 'childImageSharp___fixed___aspectRatio',
  ChildImageSharpFixedBase64 = 'childImageSharp___fixed___base64',
  ChildImageSharpFixedHeight = 'childImageSharp___fixed___height',
  ChildImageSharpFixedOriginalName = 'childImageSharp___fixed___originalName',
  ChildImageSharpFixedSrc = 'childImageSharp___fixed___src',
  ChildImageSharpFixedSrcSet = 'childImageSharp___fixed___srcSet',
  ChildImageSharpFixedSrcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  ChildImageSharpFixedSrcWebp = 'childImageSharp___fixed___srcWebp',
  ChildImageSharpFixedTracedSvg = 'childImageSharp___fixed___tracedSVG',
  ChildImageSharpFixedWidth = 'childImageSharp___fixed___width',
  ChildImageSharpFluidAspectRatio = 'childImageSharp___fluid___aspectRatio',
  ChildImageSharpFluidBase64 = 'childImageSharp___fluid___base64',
  ChildImageSharpFluidOriginalImg = 'childImageSharp___fluid___originalImg',
  ChildImageSharpFluidOriginalName = 'childImageSharp___fluid___originalName',
  ChildImageSharpFluidPresentationHeight = 'childImageSharp___fluid___presentationHeight',
  ChildImageSharpFluidPresentationWidth = 'childImageSharp___fluid___presentationWidth',
  ChildImageSharpFluidSizes = 'childImageSharp___fluid___sizes',
  ChildImageSharpFluidSrc = 'childImageSharp___fluid___src',
  ChildImageSharpFluidSrcSet = 'childImageSharp___fluid___srcSet',
  ChildImageSharpFluidSrcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  ChildImageSharpFluidSrcWebp = 'childImageSharp___fluid___srcWebp',
  ChildImageSharpFluidTracedSvg = 'childImageSharp___fluid___tracedSVG',
  ChildImageSharpGatsbyImageData = 'childImageSharp___gatsbyImageData',
  ChildImageSharpId = 'childImageSharp___id',
  ChildImageSharpInternalContent = 'childImageSharp___internal___content',
  ChildImageSharpInternalContentDigest = 'childImageSharp___internal___contentDigest',
  ChildImageSharpInternalDescription = 'childImageSharp___internal___description',
  ChildImageSharpInternalFieldOwners = 'childImageSharp___internal___fieldOwners',
  ChildImageSharpInternalIgnoreType = 'childImageSharp___internal___ignoreType',
  ChildImageSharpInternalMediaType = 'childImageSharp___internal___mediaType',
  ChildImageSharpInternalOwner = 'childImageSharp___internal___owner',
  ChildImageSharpInternalType = 'childImageSharp___internal___type',
  ChildImageSharpOriginalHeight = 'childImageSharp___original___height',
  ChildImageSharpOriginalSrc = 'childImageSharp___original___src',
  ChildImageSharpOriginalWidth = 'childImageSharp___original___width',
  ChildImageSharpParentChildren = 'childImageSharp___parent___children',
  ChildImageSharpParentChildrenChildren = 'childImageSharp___parent___children___children',
  ChildImageSharpParentChildrenId = 'childImageSharp___parent___children___id',
  ChildImageSharpParentId = 'childImageSharp___parent___id',
  ChildImageSharpParentInternalContent = 'childImageSharp___parent___internal___content',
  ChildImageSharpParentInternalContentDigest = 'childImageSharp___parent___internal___contentDigest',
  ChildImageSharpParentInternalDescription = 'childImageSharp___parent___internal___description',
  ChildImageSharpParentInternalFieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  ChildImageSharpParentInternalIgnoreType = 'childImageSharp___parent___internal___ignoreType',
  ChildImageSharpParentInternalMediaType = 'childImageSharp___parent___internal___mediaType',
  ChildImageSharpParentInternalOwner = 'childImageSharp___parent___internal___owner',
  ChildImageSharpParentInternalType = 'childImageSharp___parent___internal___type',
  ChildImageSharpParentParentChildren = 'childImageSharp___parent___parent___children',
  ChildImageSharpParentParentId = 'childImageSharp___parent___parent___id',
  ChildImageSharpResizeAspectRatio = 'childImageSharp___resize___aspectRatio',
  ChildImageSharpResizeHeight = 'childImageSharp___resize___height',
  ChildImageSharpResizeOriginalName = 'childImageSharp___resize___originalName',
  ChildImageSharpResizeSrc = 'childImageSharp___resize___src',
  ChildImageSharpResizeTracedSvg = 'childImageSharp___resize___tracedSVG',
  ChildImageSharpResizeWidth = 'childImageSharp___resize___width',
  Children = 'children',
  ChildrenImageSharp = 'childrenImageSharp',
  ChildrenImageSharpChildren = 'childrenImageSharp___children',
  ChildrenImageSharpChildrenChildren = 'childrenImageSharp___children___children',
  ChildrenImageSharpChildrenChildrenChildren = 'childrenImageSharp___children___children___children',
  ChildrenImageSharpChildrenChildrenId = 'childrenImageSharp___children___children___id',
  ChildrenImageSharpChildrenId = 'childrenImageSharp___children___id',
  ChildrenImageSharpChildrenInternalContent = 'childrenImageSharp___children___internal___content',
  ChildrenImageSharpChildrenInternalContentDigest = 'childrenImageSharp___children___internal___contentDigest',
  ChildrenImageSharpChildrenInternalDescription = 'childrenImageSharp___children___internal___description',
  ChildrenImageSharpChildrenInternalFieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  ChildrenImageSharpChildrenInternalIgnoreType = 'childrenImageSharp___children___internal___ignoreType',
  ChildrenImageSharpChildrenInternalMediaType = 'childrenImageSharp___children___internal___mediaType',
  ChildrenImageSharpChildrenInternalOwner = 'childrenImageSharp___children___internal___owner',
  ChildrenImageSharpChildrenInternalType = 'childrenImageSharp___children___internal___type',
  ChildrenImageSharpChildrenParentChildren = 'childrenImageSharp___children___parent___children',
  ChildrenImageSharpChildrenParentId = 'childrenImageSharp___children___parent___id',
  ChildrenImageSharpFixedAspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  ChildrenImageSharpFixedBase64 = 'childrenImageSharp___fixed___base64',
  ChildrenImageSharpFixedHeight = 'childrenImageSharp___fixed___height',
  ChildrenImageSharpFixedOriginalName = 'childrenImageSharp___fixed___originalName',
  ChildrenImageSharpFixedSrc = 'childrenImageSharp___fixed___src',
  ChildrenImageSharpFixedSrcSet = 'childrenImageSharp___fixed___srcSet',
  ChildrenImageSharpFixedSrcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  ChildrenImageSharpFixedSrcWebp = 'childrenImageSharp___fixed___srcWebp',
  ChildrenImageSharpFixedTracedSvg = 'childrenImageSharp___fixed___tracedSVG',
  ChildrenImageSharpFixedWidth = 'childrenImageSharp___fixed___width',
  ChildrenImageSharpFluidAspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  ChildrenImageSharpFluidBase64 = 'childrenImageSharp___fluid___base64',
  ChildrenImageSharpFluidOriginalImg = 'childrenImageSharp___fluid___originalImg',
  ChildrenImageSharpFluidOriginalName = 'childrenImageSharp___fluid___originalName',
  ChildrenImageSharpFluidPresentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  ChildrenImageSharpFluidPresentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  ChildrenImageSharpFluidSizes = 'childrenImageSharp___fluid___sizes',
  ChildrenImageSharpFluidSrc = 'childrenImageSharp___fluid___src',
  ChildrenImageSharpFluidSrcSet = 'childrenImageSharp___fluid___srcSet',
  ChildrenImageSharpFluidSrcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  ChildrenImageSharpFluidSrcWebp = 'childrenImageSharp___fluid___srcWebp',
  ChildrenImageSharpFluidTracedSvg = 'childrenImageSharp___fluid___tracedSVG',
  ChildrenImageSharpGatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  ChildrenImageSharpId = 'childrenImageSharp___id',
  ChildrenImageSharpInternalContent = 'childrenImageSharp___internal___content',
  ChildrenImageSharpInternalContentDigest = 'childrenImageSharp___internal___contentDigest',
  ChildrenImageSharpInternalDescription = 'childrenImageSharp___internal___description',
  ChildrenImageSharpInternalFieldOwners = 'childrenImageSharp___internal___fieldOwners',
  ChildrenImageSharpInternalIgnoreType = 'childrenImageSharp___internal___ignoreType',
  ChildrenImageSharpInternalMediaType = 'childrenImageSharp___internal___mediaType',
  ChildrenImageSharpInternalOwner = 'childrenImageSharp___internal___owner',
  ChildrenImageSharpInternalType = 'childrenImageSharp___internal___type',
  ChildrenImageSharpOriginalHeight = 'childrenImageSharp___original___height',
  ChildrenImageSharpOriginalSrc = 'childrenImageSharp___original___src',
  ChildrenImageSharpOriginalWidth = 'childrenImageSharp___original___width',
  ChildrenImageSharpParentChildren = 'childrenImageSharp___parent___children',
  ChildrenImageSharpParentChildrenChildren = 'childrenImageSharp___parent___children___children',
  ChildrenImageSharpParentChildrenId = 'childrenImageSharp___parent___children___id',
  ChildrenImageSharpParentId = 'childrenImageSharp___parent___id',
  ChildrenImageSharpParentInternalContent = 'childrenImageSharp___parent___internal___content',
  ChildrenImageSharpParentInternalContentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  ChildrenImageSharpParentInternalDescription = 'childrenImageSharp___parent___internal___description',
  ChildrenImageSharpParentInternalFieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  ChildrenImageSharpParentInternalIgnoreType = 'childrenImageSharp___parent___internal___ignoreType',
  ChildrenImageSharpParentInternalMediaType = 'childrenImageSharp___parent___internal___mediaType',
  ChildrenImageSharpParentInternalOwner = 'childrenImageSharp___parent___internal___owner',
  ChildrenImageSharpParentInternalType = 'childrenImageSharp___parent___internal___type',
  ChildrenImageSharpParentParentChildren = 'childrenImageSharp___parent___parent___children',
  ChildrenImageSharpParentParentId = 'childrenImageSharp___parent___parent___id',
  ChildrenImageSharpResizeAspectRatio = 'childrenImageSharp___resize___aspectRatio',
  ChildrenImageSharpResizeHeight = 'childrenImageSharp___resize___height',
  ChildrenImageSharpResizeOriginalName = 'childrenImageSharp___resize___originalName',
  ChildrenImageSharpResizeSrc = 'childrenImageSharp___resize___src',
  ChildrenImageSharpResizeTracedSvg = 'childrenImageSharp___resize___tracedSVG',
  ChildrenImageSharpResizeWidth = 'childrenImageSharp___resize___width',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Ctime = 'ctime',
  CtimeMs = 'ctimeMs',
  Dev = 'dev',
  Dir = 'dir',
  Ext = 'ext',
  Extension = 'extension',
  Gid = 'gid',
  Hash = 'hash',
  Id = 'id',
  Ino = 'ino',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Mode = 'mode',
  ModifiedTime = 'modifiedTime',
  Mtime = 'mtime',
  MtimeMs = 'mtimeMs',
  Name = 'name',
  Nlink = 'nlink',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PrettySize = 'prettySize',
  PublicUrl = 'publicURL',
  Rdev = 'rdev',
  RelativeDirectory = 'relativeDirectory',
  RelativePath = 'relativePath',
  Root = 'root',
  Size = 'size',
  SourceInstanceName = 'sourceInstanceName',
  Uid = 'uid'
}

export type FileFilterInput = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<FileEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<FileGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileGroupConnectionGroupArgs = {
  field: FileFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export enum GatsbyImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum GatsbyImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum GatsbyImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  ne?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export enum ImageCropFocus {
  Attention = 'ATTENTION',
  Center = 'CENTER',
  East = 'EAST',
  Entropy = 'ENTROPY',
  North = 'NORTH',
  Northeast = 'NORTHEAST',
  Northwest = 'NORTHWEST',
  South = 'SOUTH',
  Southeast = 'SOUTHEAST',
  Southwest = 'SOUTHWEST',
  West = 'WEST'
}

export enum ImageFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Inside = 'INSIDE',
  Outside = 'OUTSIDE'
}

export enum ImageFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  NoChange = 'NO_CHANGE',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum ImageLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum ImagePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE',
  TracedSvg = 'TRACED_SVG'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  children: Array<Node>;
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  id: Scalars['ID'];
  internal: Internal;
  original?: Maybe<ImageSharpOriginal>;
  parent?: Maybe<Node>;
  resize?: Maybe<ImageSharpResize>;
};


export type ImageSharpFixedArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpFluidArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpGatsbyImageDataArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  avifOptions?: InputMaybe<AvifOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  height?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  layout?: InputMaybe<ImageLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  pngOptions?: InputMaybe<PngOptions>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  transformOptions?: InputMaybe<TransformOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  width?: InputMaybe<Scalars['Int']>;
};


export type ImageSharpResizeArgs = {
  background?: InputMaybe<Scalars['String']>;
  base64?: InputMaybe<Scalars['Boolean']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  height?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  rotate?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  traceSVG?: InputMaybe<Potrace>;
  trim?: InputMaybe<Scalars['Float']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FixedAspectRatio = 'fixed___aspectRatio',
  FixedBase64 = 'fixed___base64',
  FixedHeight = 'fixed___height',
  FixedOriginalName = 'fixed___originalName',
  FixedSrc = 'fixed___src',
  FixedSrcSet = 'fixed___srcSet',
  FixedSrcSetWebp = 'fixed___srcSetWebp',
  FixedSrcWebp = 'fixed___srcWebp',
  FixedTracedSvg = 'fixed___tracedSVG',
  FixedWidth = 'fixed___width',
  FluidAspectRatio = 'fluid___aspectRatio',
  FluidBase64 = 'fluid___base64',
  FluidOriginalImg = 'fluid___originalImg',
  FluidOriginalName = 'fluid___originalName',
  FluidPresentationHeight = 'fluid___presentationHeight',
  FluidPresentationWidth = 'fluid___presentationWidth',
  FluidSizes = 'fluid___sizes',
  FluidSrc = 'fluid___src',
  FluidSrcSet = 'fluid___srcSet',
  FluidSrcSetWebp = 'fluid___srcSetWebp',
  FluidSrcWebp = 'fluid___srcWebp',
  FluidTracedSvg = 'fluid___tracedSVG',
  GatsbyImageData = 'gatsbyImageData',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  OriginalHeight = 'original___height',
  OriginalSrc = 'original___src',
  OriginalWidth = 'original___width',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ResizeAspectRatio = 'resize___aspectRatio',
  ResizeHeight = 'resize___height',
  ResizeOriginalName = 'resize___originalName',
  ResizeSrc = 'resize___src',
  ResizeTracedSvg = 'resize___tracedSVG',
  ResizeWidth = 'resize___width'
}

export type ImageSharpFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  aspectRatio?: Maybe<Scalars['Float']>;
  base64?: Maybe<Scalars['String']>;
  height: Scalars['Float'];
  originalName?: Maybe<Scalars['String']>;
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width: Scalars['Float'];
};

export type ImageSharpFixedFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  aspectRatio: Scalars['Float'];
  base64?: Maybe<Scalars['String']>;
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationHeight: Scalars['Int'];
  presentationWidth: Scalars['Int'];
  sizes: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcSetWebp?: Maybe<Scalars['String']>;
  srcWebp?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
};

export type ImageSharpFluidFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  base64?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<ImageSharpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<ImageSharpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpGroupConnectionGroupArgs = {
  field: ImageSharpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type ImageSharpOriginalFilterInput = {
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Int']>;
  originalName?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type ImageSharpResizeFilterInput = {
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
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

export type JpgOptions = {
  progressive?: InputMaybe<Scalars['Boolean']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  ne?: InputMaybe<Scalars['JSON']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
};

/** Node Interface */
export type Node = {
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};

export type NodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type PngOptions = {
  compressionSpeed?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  alphaMax?: InputMaybe<Scalars['Float']>;
  background?: InputMaybe<Scalars['String']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  turdSize?: InputMaybe<Scalars['Float']>;
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
};

export enum PotraceTurnPolicy {
  TurnpolicyBlack = 'TURNPOLICY_BLACK',
  TurnpolicyLeft = 'TURNPOLICY_LEFT',
  TurnpolicyMajority = 'TURNPOLICY_MAJORITY',
  TurnpolicyMinority = 'TURNPOLICY_MINORITY',
  TurnpolicyRight = 'TURNPOLICY_RIGHT',
  TurnpolicyWhite = 'TURNPOLICY_WHITE'
}

export type Query = {
  __typename?: 'Query';
  allDirectory: DirectoryConnection;
  allFile: FileConnection;
  allImageSharp: ImageSharpConnection;
  allInternalEvents: Internal__EventsConnection;
  allSite: SiteConnection;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  allSiteFunction: SiteFunctionConnection;
  allSitePage: SitePageConnection;
  allSitePlugin: SitePluginConnection;
  allWp: WpConnection;
  allWpBlockEditorContentNode: WpBlockEditorContentNodeConnection;
  allWpBlockEditorPreview: WpBlockEditorPreviewConnection;
  allWpCategory: WpCategoryConnection;
  allWpComment: WpCommentConnection;
  allWpCommentAuthor: WpCommentAuthorConnection;
  allWpContentNode: WpContentNodeConnection;
  allWpContentType: WpContentTypeConnection;
  allWpMediaItem: WpMediaItemConnection;
  allWpMenu: WpMenuConnection;
  allWpMenuItem: WpMenuItemConnection;
  allWpPage: WpPageConnection;
  allWpPost: WpPostConnection;
  allWpPostFormat: WpPostFormatConnection;
  allWpReusableBlock: WpReusableBlockConnection;
  allWpTag: WpTagConnection;
  allWpTaxonomy: WpTaxonomyConnection;
  allWpTermNode: WpTermNodeConnection;
  allWpUser: WpUserConnection;
  allWpUserRole: WpUserRoleConnection;
  directory?: Maybe<Directory>;
  file?: Maybe<File>;
  imageSharp?: Maybe<ImageSharp>;
  internalEvents?: Maybe<Internal__Events>;
  site?: Maybe<Site>;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  siteFunction?: Maybe<SiteFunction>;
  sitePage?: Maybe<SitePage>;
  sitePlugin?: Maybe<SitePlugin>;
  wp?: Maybe<Wp>;
  wpBlockEditorContentNode?: Maybe<WpBlockEditorContentNode>;
  wpBlockEditorPreview?: Maybe<WpBlockEditorPreview>;
  wpCategory?: Maybe<WpCategory>;
  wpComment?: Maybe<WpComment>;
  wpCommentAuthor?: Maybe<WpCommentAuthor>;
  wpContentNode?: Maybe<WpContentNode>;
  wpContentType?: Maybe<WpContentType>;
  wpMediaItem?: Maybe<WpMediaItem>;
  wpMenu?: Maybe<WpMenu>;
  wpMenuItem?: Maybe<WpMenuItem>;
  wpPage?: Maybe<WpPage>;
  wpPost?: Maybe<WpPost>;
  wpPostFormat?: Maybe<WpPostFormat>;
  wpReusableBlock?: Maybe<WpReusableBlock>;
  wpTag?: Maybe<WpTag>;
  wpTaxonomy?: Maybe<WpTaxonomy>;
  wpTermNode?: Maybe<WpTermNode>;
  wpUser?: Maybe<WpUser>;
  wpUserRole?: Maybe<WpUserRole>;
};


export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<DirectorySortInput>;
};


export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<FileSortInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<ImageSharpSortInput>;
};


export type QueryAllInternalEventsArgs = {
  filter?: InputMaybe<Internal__EventsFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Internal__EventsSortInput>;
};


export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteSortInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteBuildMetadataSortInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SiteFunctionSortInput>;
};


export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePageSortInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<SitePluginSortInput>;
};


export type QueryAllWpArgs = {
  filter?: InputMaybe<WpFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpSortInput>;
};


export type QueryAllWpBlockEditorContentNodeArgs = {
  filter?: InputMaybe<WpBlockEditorContentNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpBlockEditorContentNodeSortInput>;
};


export type QueryAllWpBlockEditorPreviewArgs = {
  filter?: InputMaybe<WpBlockEditorPreviewFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpBlockEditorPreviewSortInput>;
};


export type QueryAllWpCategoryArgs = {
  filter?: InputMaybe<WpCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpCategorySortInput>;
};


export type QueryAllWpCommentArgs = {
  filter?: InputMaybe<WpCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpCommentSortInput>;
};


export type QueryAllWpCommentAuthorArgs = {
  filter?: InputMaybe<WpCommentAuthorFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpCommentAuthorSortInput>;
};


export type QueryAllWpContentNodeArgs = {
  filter?: InputMaybe<WpContentNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpContentNodeSortInput>;
};


export type QueryAllWpContentTypeArgs = {
  filter?: InputMaybe<WpContentTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpContentTypeSortInput>;
};


export type QueryAllWpMediaItemArgs = {
  filter?: InputMaybe<WpMediaItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpMediaItemSortInput>;
};


export type QueryAllWpMenuArgs = {
  filter?: InputMaybe<WpMenuFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpMenuSortInput>;
};


export type QueryAllWpMenuItemArgs = {
  filter?: InputMaybe<WpMenuItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpMenuItemSortInput>;
};


export type QueryAllWpPageArgs = {
  filter?: InputMaybe<WpPageFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpPageSortInput>;
};


export type QueryAllWpPostArgs = {
  filter?: InputMaybe<WpPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpPostSortInput>;
};


export type QueryAllWpPostFormatArgs = {
  filter?: InputMaybe<WpPostFormatFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpPostFormatSortInput>;
};


export type QueryAllWpReusableBlockArgs = {
  filter?: InputMaybe<WpReusableBlockFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpReusableBlockSortInput>;
};


export type QueryAllWpTagArgs = {
  filter?: InputMaybe<WpTagFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpTagSortInput>;
};


export type QueryAllWpTaxonomyArgs = {
  filter?: InputMaybe<WpTaxonomyFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpTaxonomySortInput>;
};


export type QueryAllWpTermNodeArgs = {
  filter?: InputMaybe<WpTermNodeFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpTermNodeSortInput>;
};


export type QueryAllWpUserArgs = {
  filter?: InputMaybe<WpUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpUserSortInput>;
};


export type QueryAllWpUserRoleArgs = {
  filter?: InputMaybe<WpUserRoleFilterInput>;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<WpUserRoleSortInput>;
};


export type QueryDirectoryArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryFileArgs = {
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  blksize?: InputMaybe<IntQueryOperatorInput>;
  blocks?: InputMaybe<IntQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  hash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  publicURL?: InputMaybe<StringQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
};


export type QueryImageSharpArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
};


export type QueryInternalEventsArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  events?: InputMaybe<Internal__EventsEventsFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  next_rest_url?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previous_rest_url?: InputMaybe<StringQueryOperatorInput>;
  rest_url?: InputMaybe<StringQueryOperatorInput>;
  total?: InputMaybe<IntQueryOperatorInput>;
  total_pages?: InputMaybe<IntQueryOperatorInput>;
};


export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};


export type QuerySiteFunctionArgs = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};


export type QuerySitePageArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};


export type QuerySitePluginArgs = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpArgs = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
};


export type QueryWpBlockEditorContentNodeArgs = {
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpBlockEditorPreviewArgs = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  lastUpdateTime?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewed?: InputMaybe<WpBlockEditorContentNodeFilterInput>;
  previewedDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  previewedParentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpCategoryArgs = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionFilterInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
};


export type QueryWpCommentArgs = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  approved?: InputMaybe<BooleanQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
};


export type QueryWpCommentAuthorArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpContentNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpContentTypeArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpMediaItemArgs = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  remoteFile?: InputMaybe<FileFilterInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
};


export type QueryWpMenuArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpMenuItemArgs = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpPageArgs = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
};


export type QueryWpPostArgs = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpPostFormatArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpReusableBlockArgs = {
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpTagArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpTagToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpTaxonomyArgs = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
};


export type QueryWpTermNodeArgs = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpUserArgs = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  blockEditorPreviews?: InputMaybe<WpUserToBlockEditorPreviewConnectionFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments?: InputMaybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
};


export type QueryWpUserRoleArgs = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

/** Remote Interface */
export type RemoteFile = {
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mimeType: Scalars['String'];
  publicUrl: Scalars['String'];
  resize?: Maybe<RemoteFileResize>;
  width?: Maybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** Remote Interface */
export type RemoteFileResizeArgs = {
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export enum RemoteFileCropFocus {
  Bottom = 'BOTTOM',
  Center = 'CENTER',
  Edges = 'EDGES',
  Entropy = 'ENTROPY',
  Faces = 'FACES',
  Left = 'LEFT',
  Right = 'RIGHT',
  Top = 'TOP'
}

export enum RemoteFileFit {
  Contain = 'CONTAIN',
  Cover = 'COVER',
  Fill = 'FILL',
  Outside = 'OUTSIDE'
}

export enum RemoteFileFormat {
  Auto = 'AUTO',
  Avif = 'AVIF',
  Jpg = 'JPG',
  Png = 'PNG',
  Webp = 'WEBP'
}

export enum RemoteFileLayout {
  Constrained = 'CONSTRAINED',
  Fixed = 'FIXED',
  FullWidth = 'FULL_WIDTH'
}

export enum RemoteFilePlaceholder {
  Blurred = 'BLURRED',
  DominantColor = 'DOMINANT_COLOR',
  None = 'NONE'
}

export type RemoteFileResize = {
  __typename?: 'RemoteFileResize';
  height?: Maybe<Scalars['Int']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type RemoteFileResizeFilterInput = {
  height?: InputMaybe<IntQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  host?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  jsxRuntime?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  pathPrefix?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  port?: Maybe<Scalars['Int']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  trailingSlash?: Maybe<Scalars['String']>;
};


export type SiteBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  buildTime?: Maybe<Scalars['Date']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  parent?: Maybe<Node>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteBuildMetadataEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataGroupConnectionGroupArgs = {
  field: SiteBuildMetadataFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  BuildTime = 'buildTime',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Host = 'host',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  JsxRuntime = 'jsxRuntime',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PathPrefix = 'pathPrefix',
  Polyfill = 'polyfill',
  Port = 'port',
  SiteMetadataDescription = 'siteMetadata___description',
  SiteMetadataTitle = 'siteMetadata___title',
  TrailingSlash = 'trailingSlash'
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  absoluteCompiledFilePath: Scalars['String'];
  children: Array<Node>;
  functionRoute: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  matchPath?: Maybe<Scalars['String']>;
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  parent?: Maybe<Node>;
  pluginName: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  AbsoluteCompiledFilePath = 'absoluteCompiledFilePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  FunctionRoute = 'functionRoute',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  OriginalAbsoluteFilePath = 'originalAbsoluteFilePath',
  OriginalRelativeFilePath = 'originalRelativeFilePath',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginName = 'pluginName',
  RelativeCompiledFilePath = 'relativeCompiledFilePath'
}

export type SiteFunctionFilterInput = {
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteFunctionEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteFunctionGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionGroupConnectionGroupArgs = {
  field: SiteFunctionFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SiteEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SiteGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteGroupConnectionGroupArgs = {
  field: SiteFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePage = Node & {
  __typename?: 'SitePage';
  children: Array<Node>;
  component: Scalars['String'];
  componentChunkName: Scalars['String'];
  id: Scalars['ID'];
  internal: Internal;
  internalComponentName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  path: Scalars['String'];
  pluginCreator?: Maybe<SitePlugin>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Component = 'component',
  ComponentChunkName = 'componentChunkName',
  Id = 'id',
  InternalComponentName = 'internalComponentName',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  MatchPath = 'matchPath',
  PageContext = 'pageContext',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  PluginCreatorBrowserApIs = 'pluginCreator___browserAPIs',
  PluginCreatorChildren = 'pluginCreator___children',
  PluginCreatorChildrenChildren = 'pluginCreator___children___children',
  PluginCreatorChildrenChildrenChildren = 'pluginCreator___children___children___children',
  PluginCreatorChildrenChildrenId = 'pluginCreator___children___children___id',
  PluginCreatorChildrenId = 'pluginCreator___children___id',
  PluginCreatorChildrenInternalContent = 'pluginCreator___children___internal___content',
  PluginCreatorChildrenInternalContentDigest = 'pluginCreator___children___internal___contentDigest',
  PluginCreatorChildrenInternalDescription = 'pluginCreator___children___internal___description',
  PluginCreatorChildrenInternalFieldOwners = 'pluginCreator___children___internal___fieldOwners',
  PluginCreatorChildrenInternalIgnoreType = 'pluginCreator___children___internal___ignoreType',
  PluginCreatorChildrenInternalMediaType = 'pluginCreator___children___internal___mediaType',
  PluginCreatorChildrenInternalOwner = 'pluginCreator___children___internal___owner',
  PluginCreatorChildrenInternalType = 'pluginCreator___children___internal___type',
  PluginCreatorChildrenParentChildren = 'pluginCreator___children___parent___children',
  PluginCreatorChildrenParentId = 'pluginCreator___children___parent___id',
  PluginCreatorId = 'pluginCreator___id',
  PluginCreatorInternalContent = 'pluginCreator___internal___content',
  PluginCreatorInternalContentDigest = 'pluginCreator___internal___contentDigest',
  PluginCreatorInternalDescription = 'pluginCreator___internal___description',
  PluginCreatorInternalFieldOwners = 'pluginCreator___internal___fieldOwners',
  PluginCreatorInternalIgnoreType = 'pluginCreator___internal___ignoreType',
  PluginCreatorInternalMediaType = 'pluginCreator___internal___mediaType',
  PluginCreatorInternalOwner = 'pluginCreator___internal___owner',
  PluginCreatorInternalType = 'pluginCreator___internal___type',
  PluginCreatorName = 'pluginCreator___name',
  PluginCreatorNodeApIs = 'pluginCreator___nodeAPIs',
  PluginCreatorPackageJson = 'pluginCreator___packageJson',
  PluginCreatorParentChildren = 'pluginCreator___parent___children',
  PluginCreatorParentChildrenChildren = 'pluginCreator___parent___children___children',
  PluginCreatorParentChildrenId = 'pluginCreator___parent___children___id',
  PluginCreatorParentId = 'pluginCreator___parent___id',
  PluginCreatorParentInternalContent = 'pluginCreator___parent___internal___content',
  PluginCreatorParentInternalContentDigest = 'pluginCreator___parent___internal___contentDigest',
  PluginCreatorParentInternalDescription = 'pluginCreator___parent___internal___description',
  PluginCreatorParentInternalFieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  PluginCreatorParentInternalIgnoreType = 'pluginCreator___parent___internal___ignoreType',
  PluginCreatorParentInternalMediaType = 'pluginCreator___parent___internal___mediaType',
  PluginCreatorParentInternalOwner = 'pluginCreator___parent___internal___owner',
  PluginCreatorParentInternalType = 'pluginCreator___parent___internal___type',
  PluginCreatorParentParentChildren = 'pluginCreator___parent___parent___children',
  PluginCreatorParentParentId = 'pluginCreator___parent___parent___id',
  PluginCreatorPluginFilepath = 'pluginCreator___pluginFilepath',
  PluginCreatorPluginOptions = 'pluginCreator___pluginOptions',
  PluginCreatorResolve = 'pluginCreator___resolve',
  PluginCreatorSsrApIs = 'pluginCreator___ssrAPIs',
  PluginCreatorVersion = 'pluginCreator___version'
}

export type SitePageFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageGroupConnectionGroupArgs = {
  field: SitePageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  packageJson?: Maybe<Scalars['JSON']>;
  parent?: Maybe<Node>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  resolve?: Maybe<Scalars['String']>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  BrowserApIs = 'browserAPIs',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeApIs = 'nodeAPIs',
  PackageJson = 'packageJson',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PluginFilepath = 'pluginFilepath',
  PluginOptions = 'pluginOptions',
  Resolve = 'resolve',
  SsrApIs = 'ssrAPIs',
  Version = 'version'
}

export type SitePluginFilterInput = {
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  resolve?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<SitePluginEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginGroupConnectionGroupArgs = {
  field: SitePluginFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
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

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  description?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ne?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
};

export type TransformOptions = {
  cropFocus?: InputMaybe<ImageCropFocus>;
  duotone?: InputMaybe<DuotoneGradient>;
  fit?: InputMaybe<ImageFit>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

/** Non-node WPGraphQL root fields. */
export type Wp = Node & {
  __typename?: 'Wp';
  /** Entry point to get all settings for the site */
  allSettings?: Maybe<WpSettings>;
  children: Array<Node>;
  /** Fields of the &#039;DiscussionSettings&#039; settings group */
  discussionSettings?: Maybe<WpDiscussionSettings>;
  /** Fields of the &#039;GeneralSettings&#039; settings group */
  generalSettings?: Maybe<WpGeneralSettings>;
  id: Scalars['ID'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Fields of the &#039;ReadingSettings&#039; settings group */
  readingSettings?: Maybe<WpReadingSettings>;
  /** Information needed by gatsby-source-wordpress. */
  wpGatsby?: Maybe<WpWpGatsby>;
  /** Fields of the &#039;WritingSettings&#039; settings group */
  writingSettings?: Maybe<WpWritingSettings>;
};

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type WpAvatar = {
  __typename?: 'WpAvatar';
  /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
  default?: Maybe<Scalars['String']>;
  /** HTML attributes to insert in the IMG element. Is not sanitized. */
  extraAttr?: Maybe<Scalars['String']>;
  /** Whether to always show the default image, never the Gravatar. */
  forceDefault?: Maybe<Scalars['Boolean']>;
  /** Whether the avatar was successfully found. */
  foundAvatar?: Maybe<Scalars['Boolean']>;
  /** Height of the avatar image. */
  height?: Maybe<Scalars['Int']>;
  /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
  rating?: Maybe<Scalars['String']>;
  /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
  scheme?: Maybe<Scalars['String']>;
  /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
  size?: Maybe<Scalars['Int']>;
  /** URL for the gravatar image source. */
  url?: Maybe<Scalars['String']>;
  /** Width of the avatar image. */
  width?: Maybe<Scalars['Int']>;
};

export type WpAvatarFilterInput = {
  default?: InputMaybe<StringQueryOperatorInput>;
  extraAttr?: InputMaybe<StringQueryOperatorInput>;
  forceDefault?: InputMaybe<BooleanQueryOperatorInput>;
  foundAvatar?: InputMaybe<BooleanQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  rating?: InputMaybe<StringQueryOperatorInput>;
  scheme?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

export type WpBlock = {
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpBlockAttributesObject = {
  __typename?: 'WpBlockAttributesObject';
  foobar?: Maybe<Scalars['String']>;
};

export type WpBlockEditorContentNode = {
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  children: Array<Node>;
  id: Scalars['ID'];
  internal: Internal;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
};

export type WpBlockEditorContentNodeConnection = {
  __typename?: 'WpBlockEditorContentNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpBlockEditorContentNodeEdge>;
  group: Array<WpBlockEditorContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpBlockEditorContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpBlockEditorContentNodeConnectionDistinctArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeConnectionGroupArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpBlockEditorContentNodeConnectionMaxArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeConnectionMinArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeConnectionSumArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};

export type WpBlockEditorContentNodeEdge = {
  __typename?: 'WpBlockEditorContentNodeEdge';
  next?: Maybe<WpBlockEditorContentNode>;
  node: WpBlockEditorContentNode;
  previous?: Maybe<WpBlockEditorContentNode>;
};

export enum WpBlockEditorContentNodeFieldsEnum {
  Blocks = 'blocks',
  BlocksJson = 'blocksJSON',
  BlocksAttributesJson = 'blocks___attributesJSON',
  BlocksDynamicContent = 'blocks___dynamicContent',
  BlocksInnerBlocks = 'blocks___innerBlocks',
  BlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___innerBlocks___isDynamic',
  BlocksInnerBlocksInnerBlocksName = 'blocks___innerBlocks___innerBlocks___name',
  BlocksInnerBlocksInnerBlocksOrder = 'blocks___innerBlocks___innerBlocks___order',
  BlocksInnerBlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___innerBlocks___originalContent',
  BlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksInnerBlocksSaveContent = 'blocks___innerBlocks___innerBlocks___saveContent',
  BlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___isDynamic',
  BlocksInnerBlocksName = 'blocks___innerBlocks___name',
  BlocksInnerBlocksOrder = 'blocks___innerBlocks___order',
  BlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___originalContent',
  BlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksParentNodeId = 'blocks___innerBlocks___parentNode___id',
  BlocksInnerBlocksSaveContent = 'blocks___innerBlocks___saveContent',
  BlocksIsDynamic = 'blocks___isDynamic',
  BlocksName = 'blocks___name',
  BlocksOrder = 'blocks___order',
  BlocksOriginalContent = 'blocks___originalContent',
  BlocksParentNodeDatabaseId = 'blocks___parentNodeDatabaseId',
  BlocksParentNodeId = 'blocks___parentNode___id',
  BlocksSaveContent = 'blocks___saveContent',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreviewBlocks = 'previewBlocks',
  PreviewBlocksJson = 'previewBlocksJSON',
  PreviewBlocksAttributesJson = 'previewBlocks___attributesJSON',
  PreviewBlocksDynamicContent = 'previewBlocks___dynamicContent',
  PreviewBlocksInnerBlocks = 'previewBlocks___innerBlocks',
  PreviewBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksInnerBlocksName = 'previewBlocks___innerBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___innerBlocks___saveContent',
  PreviewBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksName = 'previewBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksParentNodeId = 'previewBlocks___innerBlocks___parentNode___id',
  PreviewBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___saveContent',
  PreviewBlocksIsDynamic = 'previewBlocks___isDynamic',
  PreviewBlocksName = 'previewBlocks___name',
  PreviewBlocksOrder = 'previewBlocks___order',
  PreviewBlocksOriginalContent = 'previewBlocks___originalContent',
  PreviewBlocksParentNodeDatabaseId = 'previewBlocks___parentNodeDatabaseId',
  PreviewBlocksParentNodeId = 'previewBlocks___parentNode___id',
  PreviewBlocksSaveContent = 'previewBlocks___saveContent'
}

export type WpBlockEditorContentNodeFilterInput = {
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
};

export type WpBlockEditorContentNodeGroupConnection = {
  __typename?: 'WpBlockEditorContentNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpBlockEditorContentNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpBlockEditorContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpBlockEditorContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpBlockEditorContentNodeGroupConnectionDistinctArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeGroupConnectionGroupArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpBlockEditorContentNodeGroupConnectionMaxArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeGroupConnectionMinArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};


export type WpBlockEditorContentNodeGroupConnectionSumArgs = {
  field: WpBlockEditorContentNodeFieldsEnum;
};

export type WpBlockEditorContentNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpBlockEditorContentNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** The BlockEditorPreview type */
export type WpBlockEditorPreview = Node & WpContentNode & WpDatabaseIdentifier & WpNode & WpNodeWithAuthor & WpNodeWithContentEditor & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpBlockEditorPreview';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  blocks?: Maybe<Array<WpBlock>>;
  blocksJSON?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  lastUpdateTime?: Maybe<Scalars['String']>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  previewed?: Maybe<WpBlockEditorContentNode>;
  previewedDatabaseId?: Maybe<Scalars['Int']>;
  previewedParentDatabaseId?: Maybe<Scalars['Int']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The BlockEditorPreview type */
export type WpBlockEditorPreviewModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpBlockEditorPreviewConnection = {
  __typename?: 'WpBlockEditorPreviewConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpBlockEditorPreviewEdge>;
  group: Array<WpBlockEditorPreviewGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpBlockEditorPreview>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpBlockEditorPreviewConnectionDistinctArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewConnectionGroupArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpBlockEditorPreviewConnectionMaxArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewConnectionMinArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewConnectionSumArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};

export type WpBlockEditorPreviewEdge = {
  __typename?: 'WpBlockEditorPreviewEdge';
  next?: Maybe<WpBlockEditorPreview>;
  node: WpBlockEditorPreview;
  previous?: Maybe<WpBlockEditorPreview>;
};

export enum WpBlockEditorPreviewFieldsEnum {
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeBlockEditorPreviewsNodes = 'author___node___blockEditorPreviews___nodes',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorNodeIsContentNode = 'author___node___isContentNode',
  AuthorNodeIsTermNode = 'author___node___isTermNode',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  Blocks = 'blocks',
  BlocksJson = 'blocksJSON',
  BlocksAttributesJson = 'blocks___attributesJSON',
  BlocksDynamicContent = 'blocks___dynamicContent',
  BlocksInnerBlocks = 'blocks___innerBlocks',
  BlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___innerBlocks___isDynamic',
  BlocksInnerBlocksInnerBlocksName = 'blocks___innerBlocks___innerBlocks___name',
  BlocksInnerBlocksInnerBlocksOrder = 'blocks___innerBlocks___innerBlocks___order',
  BlocksInnerBlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___innerBlocks___originalContent',
  BlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksInnerBlocksSaveContent = 'blocks___innerBlocks___innerBlocks___saveContent',
  BlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___isDynamic',
  BlocksInnerBlocksName = 'blocks___innerBlocks___name',
  BlocksInnerBlocksOrder = 'blocks___innerBlocks___order',
  BlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___originalContent',
  BlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksParentNodeId = 'blocks___innerBlocks___parentNode___id',
  BlocksInnerBlocksSaveContent = 'blocks___innerBlocks___saveContent',
  BlocksIsDynamic = 'blocks___isDynamic',
  BlocksName = 'blocks___name',
  BlocksOrder = 'blocks___order',
  BlocksOriginalContent = 'blocks___originalContent',
  BlocksParentNodeDatabaseId = 'blocks___parentNodeDatabaseId',
  BlocksParentNodeId = 'blocks___parentNode___id',
  BlocksSaveContent = 'blocks___saveContent',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Content = 'content',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Guid = 'guid',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  LastUpdateTime = 'lastUpdateTime',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreviewedDatabaseId = 'previewedDatabaseId',
  PreviewedParentDatabaseId = 'previewedParentDatabaseId',
  PreviewedBlocks = 'previewed___blocks',
  PreviewedBlocksJson = 'previewed___blocksJSON',
  PreviewedBlocksAttributesJson = 'previewed___blocks___attributesJSON',
  PreviewedBlocksDynamicContent = 'previewed___blocks___dynamicContent',
  PreviewedBlocksInnerBlocks = 'previewed___blocks___innerBlocks',
  PreviewedBlocksInnerBlocksAttributesJson = 'previewed___blocks___innerBlocks___attributesJSON',
  PreviewedBlocksInnerBlocksDynamicContent = 'previewed___blocks___innerBlocks___dynamicContent',
  PreviewedBlocksInnerBlocksInnerBlocks = 'previewed___blocks___innerBlocks___innerBlocks',
  PreviewedBlocksInnerBlocksIsDynamic = 'previewed___blocks___innerBlocks___isDynamic',
  PreviewedBlocksInnerBlocksName = 'previewed___blocks___innerBlocks___name',
  PreviewedBlocksInnerBlocksOrder = 'previewed___blocks___innerBlocks___order',
  PreviewedBlocksInnerBlocksOriginalContent = 'previewed___blocks___innerBlocks___originalContent',
  PreviewedBlocksInnerBlocksParentNodeDatabaseId = 'previewed___blocks___innerBlocks___parentNodeDatabaseId',
  PreviewedBlocksInnerBlocksSaveContent = 'previewed___blocks___innerBlocks___saveContent',
  PreviewedBlocksIsDynamic = 'previewed___blocks___isDynamic',
  PreviewedBlocksName = 'previewed___blocks___name',
  PreviewedBlocksOrder = 'previewed___blocks___order',
  PreviewedBlocksOriginalContent = 'previewed___blocks___originalContent',
  PreviewedBlocksParentNodeDatabaseId = 'previewed___blocks___parentNodeDatabaseId',
  PreviewedBlocksParentNodeId = 'previewed___blocks___parentNode___id',
  PreviewedBlocksSaveContent = 'previewed___blocks___saveContent',
  PreviewedChildren = 'previewed___children',
  PreviewedChildrenChildren = 'previewed___children___children',
  PreviewedChildrenChildrenChildren = 'previewed___children___children___children',
  PreviewedChildrenChildrenId = 'previewed___children___children___id',
  PreviewedChildrenId = 'previewed___children___id',
  PreviewedChildrenInternalContent = 'previewed___children___internal___content',
  PreviewedChildrenInternalContentDigest = 'previewed___children___internal___contentDigest',
  PreviewedChildrenInternalDescription = 'previewed___children___internal___description',
  PreviewedChildrenInternalFieldOwners = 'previewed___children___internal___fieldOwners',
  PreviewedChildrenInternalIgnoreType = 'previewed___children___internal___ignoreType',
  PreviewedChildrenInternalMediaType = 'previewed___children___internal___mediaType',
  PreviewedChildrenInternalOwner = 'previewed___children___internal___owner',
  PreviewedChildrenInternalType = 'previewed___children___internal___type',
  PreviewedChildrenParentChildren = 'previewed___children___parent___children',
  PreviewedChildrenParentId = 'previewed___children___parent___id',
  PreviewedId = 'previewed___id',
  PreviewedInternalContent = 'previewed___internal___content',
  PreviewedInternalContentDigest = 'previewed___internal___contentDigest',
  PreviewedInternalDescription = 'previewed___internal___description',
  PreviewedInternalFieldOwners = 'previewed___internal___fieldOwners',
  PreviewedInternalIgnoreType = 'previewed___internal___ignoreType',
  PreviewedInternalMediaType = 'previewed___internal___mediaType',
  PreviewedInternalOwner = 'previewed___internal___owner',
  PreviewedInternalType = 'previewed___internal___type',
  PreviewedNodeType = 'previewed___nodeType',
  PreviewedParentChildren = 'previewed___parent___children',
  PreviewedParentChildrenChildren = 'previewed___parent___children___children',
  PreviewedParentChildrenId = 'previewed___parent___children___id',
  PreviewedParentId = 'previewed___parent___id',
  PreviewedParentInternalContent = 'previewed___parent___internal___content',
  PreviewedParentInternalContentDigest = 'previewed___parent___internal___contentDigest',
  PreviewedParentInternalDescription = 'previewed___parent___internal___description',
  PreviewedParentInternalFieldOwners = 'previewed___parent___internal___fieldOwners',
  PreviewedParentInternalIgnoreType = 'previewed___parent___internal___ignoreType',
  PreviewedParentInternalMediaType = 'previewed___parent___internal___mediaType',
  PreviewedParentInternalOwner = 'previewed___parent___internal___owner',
  PreviewedParentInternalType = 'previewed___parent___internal___type',
  PreviewedParentParentChildren = 'previewed___parent___parent___children',
  PreviewedParentParentId = 'previewed___parent___parent___id',
  PreviewedPreviewBlocks = 'previewed___previewBlocks',
  PreviewedPreviewBlocksJson = 'previewed___previewBlocksJSON',
  PreviewedPreviewBlocksAttributesJson = 'previewed___previewBlocks___attributesJSON',
  PreviewedPreviewBlocksDynamicContent = 'previewed___previewBlocks___dynamicContent',
  PreviewedPreviewBlocksInnerBlocks = 'previewed___previewBlocks___innerBlocks',
  PreviewedPreviewBlocksInnerBlocksAttributesJson = 'previewed___previewBlocks___innerBlocks___attributesJSON',
  PreviewedPreviewBlocksInnerBlocksDynamicContent = 'previewed___previewBlocks___innerBlocks___dynamicContent',
  PreviewedPreviewBlocksInnerBlocksInnerBlocks = 'previewed___previewBlocks___innerBlocks___innerBlocks',
  PreviewedPreviewBlocksInnerBlocksIsDynamic = 'previewed___previewBlocks___innerBlocks___isDynamic',
  PreviewedPreviewBlocksInnerBlocksName = 'previewed___previewBlocks___innerBlocks___name',
  PreviewedPreviewBlocksInnerBlocksOrder = 'previewed___previewBlocks___innerBlocks___order',
  PreviewedPreviewBlocksInnerBlocksOriginalContent = 'previewed___previewBlocks___innerBlocks___originalContent',
  PreviewedPreviewBlocksInnerBlocksParentNodeDatabaseId = 'previewed___previewBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewedPreviewBlocksInnerBlocksSaveContent = 'previewed___previewBlocks___innerBlocks___saveContent',
  PreviewedPreviewBlocksIsDynamic = 'previewed___previewBlocks___isDynamic',
  PreviewedPreviewBlocksName = 'previewed___previewBlocks___name',
  PreviewedPreviewBlocksOrder = 'previewed___previewBlocks___order',
  PreviewedPreviewBlocksOriginalContent = 'previewed___previewBlocks___originalContent',
  PreviewedPreviewBlocksParentNodeDatabaseId = 'previewed___previewBlocks___parentNodeDatabaseId',
  PreviewedPreviewBlocksParentNodeId = 'previewed___previewBlocks___parentNode___id',
  PreviewedPreviewBlocksSaveContent = 'previewed___previewBlocks___saveContent',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri'
}

export type WpBlockEditorPreviewFilterInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  lastUpdateTime?: InputMaybe<StringQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewed?: InputMaybe<WpBlockEditorContentNodeFilterInput>;
  previewedDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  previewedParentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpBlockEditorPreviewFilterListInput = {
  elemMatch?: InputMaybe<WpBlockEditorPreviewFilterInput>;
};

export type WpBlockEditorPreviewGroupConnection = {
  __typename?: 'WpBlockEditorPreviewGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpBlockEditorPreviewEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpBlockEditorPreviewGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpBlockEditorPreview>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpBlockEditorPreviewGroupConnectionDistinctArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewGroupConnectionGroupArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpBlockEditorPreviewGroupConnectionMaxArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewGroupConnectionMinArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};


export type WpBlockEditorPreviewGroupConnectionSumArgs = {
  field: WpBlockEditorPreviewFieldsEnum;
};

export type WpBlockEditorPreviewSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpBlockEditorPreviewFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpBlockFilterInput = {
  attributesJSON?: InputMaybe<StringQueryOperatorInput>;
  dynamicContent?: InputMaybe<StringQueryOperatorInput>;
  innerBlocks?: InputMaybe<WpBlockFilterListInput>;
  isDynamic?: InputMaybe<BooleanQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  originalContent?: InputMaybe<StringQueryOperatorInput>;
  parentNode?: InputMaybe<WpNodeFilterInput>;
  parentNodeDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  saveContent?: InputMaybe<StringQueryOperatorInput>;
};

export type WpBlockFilterListInput = {
  elemMatch?: InputMaybe<WpBlockFilterInput>;
};

/** The category type */
export type WpCategory = Node & WpDatabaseIdentifier & WpHierarchicalTermNode & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpCategory';
  /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpCategoryToAncestorsCategoryConnection>;
  children: Array<Node>;
  /** Connection between the category type and the ContentNode type */
  contentNodes?: Maybe<WpCategoryToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the category type and the post type */
  posts?: Maybe<WpCategoryToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the category type and the Taxonomy type */
  taxonomy?: Maybe<WpCategoryToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** Connection between the category type and the category type */
  wpChildren?: Maybe<WpCategoryToCategoryConnection>;
  /** Connection between the category type and the category type */
  wpParent?: Maybe<WpCategoryToParentCategoryConnectionEdge>;
};

export type WpCategoryConnection = {
  __typename?: 'WpCategoryConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCategoryEdge>;
  group: Array<WpCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCategoryConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionGroupArgs = {
  field: WpCategoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCategoryConnectionMaxArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionMinArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryConnectionSumArgs = {
  field: WpCategoryFieldsEnum;
};

export type WpCategoryEdge = {
  __typename?: 'WpCategoryEdge';
  next?: Maybe<WpCategory>;
  node: WpCategory;
  previous?: Maybe<WpCategory>;
};

export enum WpCategoryFieldsEnum {
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesAncestorsNodes = 'ancestors___nodes___ancestors___nodes',
  AncestorsNodesChildren = 'ancestors___nodes___children',
  AncestorsNodesChildrenChildren = 'ancestors___nodes___children___children',
  AncestorsNodesChildrenId = 'ancestors___nodes___children___id',
  AncestorsNodesContentNodesNodes = 'ancestors___nodes___contentNodes___nodes',
  AncestorsNodesCount = 'ancestors___nodes___count',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDescription = 'ancestors___nodes___description',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesInternalContent = 'ancestors___nodes___internal___content',
  AncestorsNodesInternalContentDigest = 'ancestors___nodes___internal___contentDigest',
  AncestorsNodesInternalDescription = 'ancestors___nodes___internal___description',
  AncestorsNodesInternalFieldOwners = 'ancestors___nodes___internal___fieldOwners',
  AncestorsNodesInternalIgnoreType = 'ancestors___nodes___internal___ignoreType',
  AncestorsNodesInternalMediaType = 'ancestors___nodes___internal___mediaType',
  AncestorsNodesInternalOwner = 'ancestors___nodes___internal___owner',
  AncestorsNodesInternalType = 'ancestors___nodes___internal___type',
  AncestorsNodesIsContentNode = 'ancestors___nodes___isContentNode',
  AncestorsNodesIsTermNode = 'ancestors___nodes___isTermNode',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesName = 'ancestors___nodes___name',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AncestorsNodesParentDatabaseId = 'ancestors___nodes___parentDatabaseId',
  AncestorsNodesParentId = 'ancestors___nodes___parentId',
  AncestorsNodesParentChildren = 'ancestors___nodes___parent___children',
  AncestorsNodesParentId = 'ancestors___nodes___parent___id',
  AncestorsNodesPostsNodes = 'ancestors___nodes___posts___nodes',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesTaxonomyName = 'ancestors___nodes___taxonomyName',
  AncestorsNodesTermGroupId = 'ancestors___nodes___termGroupId',
  AncestorsNodesTermTaxonomyId = 'ancestors___nodes___termTaxonomyId',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AncestorsNodesWpChildrenNodes = 'ancestors___nodes___wpChildren___nodes',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesChildren = 'contentNodes___nodes___children',
  ContentNodesNodesChildrenChildren = 'contentNodes___nodes___children___children',
  ContentNodesNodesChildrenId = 'contentNodes___nodes___children___id',
  ContentNodesNodesContentTypeName = 'contentNodes___nodes___contentTypeName',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesInternalContent = 'contentNodes___nodes___internal___content',
  ContentNodesNodesInternalContentDigest = 'contentNodes___nodes___internal___contentDigest',
  ContentNodesNodesInternalDescription = 'contentNodes___nodes___internal___description',
  ContentNodesNodesInternalFieldOwners = 'contentNodes___nodes___internal___fieldOwners',
  ContentNodesNodesInternalIgnoreType = 'contentNodes___nodes___internal___ignoreType',
  ContentNodesNodesInternalMediaType = 'contentNodes___nodes___internal___mediaType',
  ContentNodesNodesInternalOwner = 'contentNodes___nodes___internal___owner',
  ContentNodesNodesInternalType = 'contentNodes___nodes___internal___type',
  ContentNodesNodesIsContentNode = 'contentNodes___nodes___isContentNode',
  ContentNodesNodesIsTermNode = 'contentNodes___nodes___isTermNode',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  ContentNodesNodesParentChildren = 'contentNodes___nodes___parent___children',
  ContentNodesNodesParentId = 'contentNodes___nodes___parent___id',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  Link = 'link',
  Name = 'name',
  NodeType = 'nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesBlocks = 'posts___nodes___blocks',
  PostsNodesBlocksJson = 'posts___nodes___blocksJSON',
  PostsNodesBlocksAttributesJson = 'posts___nodes___blocks___attributesJSON',
  PostsNodesBlocksDynamicContent = 'posts___nodes___blocks___dynamicContent',
  PostsNodesBlocksInnerBlocks = 'posts___nodes___blocks___innerBlocks',
  PostsNodesBlocksIsDynamic = 'posts___nodes___blocks___isDynamic',
  PostsNodesBlocksName = 'posts___nodes___blocks___name',
  PostsNodesBlocksOrder = 'posts___nodes___blocks___order',
  PostsNodesBlocksOriginalContent = 'posts___nodes___blocks___originalContent',
  PostsNodesBlocksParentNodeDatabaseId = 'posts___nodes___blocks___parentNodeDatabaseId',
  PostsNodesBlocksSaveContent = 'posts___nodes___blocks___saveContent',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesContentTypeName = 'posts___nodes___contentTypeName',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  PostsNodesIsContentNode = 'posts___nodes___isContentNode',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesIsTermNode = 'posts___nodes___isTermNode',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesPreviewBlocks = 'posts___nodes___previewBlocks',
  PostsNodesPreviewBlocksJson = 'posts___nodes___previewBlocksJSON',
  PostsNodesPreviewBlocksAttributesJson = 'posts___nodes___previewBlocks___attributesJSON',
  PostsNodesPreviewBlocksDynamicContent = 'posts___nodes___previewBlocks___dynamicContent',
  PostsNodesPreviewBlocksInnerBlocks = 'posts___nodes___previewBlocks___innerBlocks',
  PostsNodesPreviewBlocksIsDynamic = 'posts___nodes___previewBlocks___isDynamic',
  PostsNodesPreviewBlocksName = 'posts___nodes___previewBlocks___name',
  PostsNodesPreviewBlocksOrder = 'posts___nodes___previewBlocks___order',
  PostsNodesPreviewBlocksOriginalContent = 'posts___nodes___previewBlocks___originalContent',
  PostsNodesPreviewBlocksParentNodeDatabaseId = 'posts___nodes___previewBlocks___parentNodeDatabaseId',
  PostsNodesPreviewBlocksSaveContent = 'posts___nodes___previewBlocks___saveContent',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  Slug = 'slug',
  TaxonomyName = 'taxonomyName',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesAncestorsNodes = 'wpChildren___nodes___ancestors___nodes',
  WpChildrenNodesChildren = 'wpChildren___nodes___children',
  WpChildrenNodesChildrenChildren = 'wpChildren___nodes___children___children',
  WpChildrenNodesChildrenId = 'wpChildren___nodes___children___id',
  WpChildrenNodesContentNodesNodes = 'wpChildren___nodes___contentNodes___nodes',
  WpChildrenNodesCount = 'wpChildren___nodes___count',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDescription = 'wpChildren___nodes___description',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesInternalContent = 'wpChildren___nodes___internal___content',
  WpChildrenNodesInternalContentDigest = 'wpChildren___nodes___internal___contentDigest',
  WpChildrenNodesInternalDescription = 'wpChildren___nodes___internal___description',
  WpChildrenNodesInternalFieldOwners = 'wpChildren___nodes___internal___fieldOwners',
  WpChildrenNodesInternalIgnoreType = 'wpChildren___nodes___internal___ignoreType',
  WpChildrenNodesInternalMediaType = 'wpChildren___nodes___internal___mediaType',
  WpChildrenNodesInternalOwner = 'wpChildren___nodes___internal___owner',
  WpChildrenNodesInternalType = 'wpChildren___nodes___internal___type',
  WpChildrenNodesIsContentNode = 'wpChildren___nodes___isContentNode',
  WpChildrenNodesIsTermNode = 'wpChildren___nodes___isTermNode',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesName = 'wpChildren___nodes___name',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  WpChildrenNodesParentDatabaseId = 'wpChildren___nodes___parentDatabaseId',
  WpChildrenNodesParentId = 'wpChildren___nodes___parentId',
  WpChildrenNodesParentChildren = 'wpChildren___nodes___parent___children',
  WpChildrenNodesParentId = 'wpChildren___nodes___parent___id',
  WpChildrenNodesPostsNodes = 'wpChildren___nodes___posts___nodes',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesTaxonomyName = 'wpChildren___nodes___taxonomyName',
  WpChildrenNodesTermGroupId = 'wpChildren___nodes___termGroupId',
  WpChildrenNodesTermTaxonomyId = 'wpChildren___nodes___termTaxonomyId',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpChildrenNodesWpChildrenNodes = 'wpChildren___nodes___wpChildren___nodes',
  WpParentNodeAncestorsNodes = 'wpParent___node___ancestors___nodes',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeContentNodesNodes = 'wpParent___node___contentNodes___nodes',
  WpParentNodeCount = 'wpParent___node___count',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDescription = 'wpParent___node___description',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  WpParentNodeIsContentNode = 'wpParent___node___isContentNode',
  WpParentNodeIsTermNode = 'wpParent___node___isTermNode',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeName = 'wpParent___node___name',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentDatabaseId = 'wpParent___node___parentDatabaseId',
  WpParentNodeParentId = 'wpParent___node___parentId',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodePostsNodes = 'wpParent___node___posts___nodes',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeTaxonomyName = 'wpParent___node___taxonomyName',
  WpParentNodeTermGroupId = 'wpParent___node___termGroupId',
  WpParentNodeTermTaxonomyId = 'wpParent___node___termTaxonomyId',
  WpParentNodeUri = 'wpParent___node___uri',
  WpParentNodeWpChildrenNodes = 'wpParent___node___wpChildren___nodes'
}

export type WpCategoryFilterInput = {
  ancestors?: InputMaybe<WpCategoryToAncestorsCategoryConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpCategoryToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  posts?: InputMaybe<WpCategoryToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpCategoryToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpCategoryToCategoryConnectionFilterInput>;
  wpParent?: InputMaybe<WpCategoryToParentCategoryConnectionEdgeFilterInput>;
};

export type WpCategoryFilterListInput = {
  elemMatch?: InputMaybe<WpCategoryFilterInput>;
};

export type WpCategoryGroupConnection = {
  __typename?: 'WpCategoryGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCategoryEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpCategoryGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpCategory>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCategoryGroupConnectionDistinctArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionGroupArgs = {
  field: WpCategoryFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCategoryGroupConnectionMaxArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionMinArgs = {
  field: WpCategoryFieldsEnum;
};


export type WpCategoryGroupConnectionSumArgs = {
  field: WpCategoryFieldsEnum;
};

export type WpCategorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCategoryFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the category type and the category type */
export type WpCategoryToAncestorsCategoryConnection = {
  __typename?: 'WpCategoryToAncestorsCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToAncestorsCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToCategoryConnection = {
  __typename?: 'WpCategoryToCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpCategoryToCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

/** Connection between the category type and the ContentNode type */
export type WpCategoryToContentNodeConnection = {
  __typename?: 'WpCategoryToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpCategoryToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the category type and the category type */
export type WpCategoryToParentCategoryConnectionEdge = {
  __typename?: 'WpCategoryToParentCategoryConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpCategory>;
};

export type WpCategoryToParentCategoryConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCategoryFilterInput>;
};

/** Connection between the category type and the post type */
export type WpCategoryToPostConnection = {
  __typename?: 'WpCategoryToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpCategoryToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

/** Connection between the category type and the Taxonomy type */
export type WpCategoryToTaxonomyConnectionEdge = {
  __typename?: 'WpCategoryToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpCategoryToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

/** A Comment object */
export type WpComment = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpComment';
  /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
  agent?: Maybe<Scalars['String']>;
  /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
  approved?: Maybe<Scalars['Boolean']>;
  /** The author of the comment */
  author?: Maybe<WpCommentToCommenterConnectionEdge>;
  /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
  authorIp?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** Connection between the Comment type and the ContentNode type */
  commentedOn?: Maybe<WpCommentToContentNodeConnectionEdge>;
  /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
  content?: Maybe<Scalars['String']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
  date?: Maybe<Scalars['Date']>;
  /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
  dateGmt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
  karma?: Maybe<Scalars['Int']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** The database id of the parent comment node or null if it is the root comment */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent comment node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the Comment type and the Comment type */
  replies?: Maybe<WpCommentToCommentConnection>;
  /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
  type?: Maybe<Scalars['String']>;
  /** Connection between the Comment type and the Comment type */
  wpParent?: Maybe<WpCommentToParentCommentConnectionEdge>;
};


/** A Comment object */
export type WpCommentDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** A Comment object */
export type WpCommentDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** A Comment Author object */
export type WpCommentAuthor = Node & WpCommenter & WpNode & {
  __typename?: 'WpCommentAuthor';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  children: Array<Node>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email for the comment author */
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** The name for the comment author. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** The url the comment author. */
  url?: Maybe<Scalars['String']>;
};

export type WpCommentAuthorConnection = {
  __typename?: 'WpCommentAuthorConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCommentAuthorEdge>;
  group: Array<WpCommentAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCommentAuthorConnectionDistinctArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionGroupArgs = {
  field: WpCommentAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCommentAuthorConnectionMaxArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionMinArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorConnectionSumArgs = {
  field: WpCommentAuthorFieldsEnum;
};

export type WpCommentAuthorEdge = {
  __typename?: 'WpCommentAuthorEdge';
  next?: Maybe<WpCommentAuthor>;
  node: WpCommentAuthor;
  previous?: Maybe<WpCommentAuthor>;
};

export enum WpCommentAuthorFieldsEnum {
  AvatarDefault = 'avatar___default',
  AvatarExtraAttr = 'avatar___extraAttr',
  AvatarForceDefault = 'avatar___forceDefault',
  AvatarFoundAvatar = 'avatar___foundAvatar',
  AvatarHeight = 'avatar___height',
  AvatarRating = 'avatar___rating',
  AvatarScheme = 'avatar___scheme',
  AvatarSize = 'avatar___size',
  AvatarUrl = 'avatar___url',
  AvatarWidth = 'avatar___width',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DatabaseId = 'databaseId',
  Email = 'email',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Url = 'url'
}

export type WpCommentAuthorFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpCommentAuthorGroupConnection = {
  __typename?: 'WpCommentAuthorGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCommentAuthorEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpCommentAuthorGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpCommentAuthor>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCommentAuthorGroupConnectionDistinctArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionGroupArgs = {
  field: WpCommentAuthorFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCommentAuthorGroupConnectionMaxArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionMinArgs = {
  field: WpCommentAuthorFieldsEnum;
};


export type WpCommentAuthorGroupConnectionSumArgs = {
  field: WpCommentAuthorFieldsEnum;
};

export type WpCommentAuthorSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCommentAuthorFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpCommentConnection = {
  __typename?: 'WpCommentConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCommentEdge>;
  group: Array<WpCommentGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCommentConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionGroupArgs = {
  field: WpCommentFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCommentConnectionMaxArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionMinArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentConnectionSumArgs = {
  field: WpCommentFieldsEnum;
};

export type WpCommentEdge = {
  __typename?: 'WpCommentEdge';
  next?: Maybe<WpComment>;
  node: WpComment;
  previous?: Maybe<WpComment>;
};

export enum WpCommentFieldsEnum {
  Agent = 'agent',
  Approved = 'approved',
  AuthorIp = 'authorIp',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeId = 'author___node___id',
  AuthorNodeName = 'author___node___name',
  AuthorNodeUrl = 'author___node___url',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CommentedOnNodeChildren = 'commentedOn___node___children',
  CommentedOnNodeChildrenChildren = 'commentedOn___node___children___children',
  CommentedOnNodeChildrenId = 'commentedOn___node___children___id',
  CommentedOnNodeContentTypeName = 'commentedOn___node___contentTypeName',
  CommentedOnNodeDatabaseId = 'commentedOn___node___databaseId',
  CommentedOnNodeDate = 'commentedOn___node___date',
  CommentedOnNodeDateGmt = 'commentedOn___node___dateGmt',
  CommentedOnNodeDesiredSlug = 'commentedOn___node___desiredSlug',
  CommentedOnNodeEnclosure = 'commentedOn___node___enclosure',
  CommentedOnNodeGuid = 'commentedOn___node___guid',
  CommentedOnNodeId = 'commentedOn___node___id',
  CommentedOnNodeInternalContent = 'commentedOn___node___internal___content',
  CommentedOnNodeInternalContentDigest = 'commentedOn___node___internal___contentDigest',
  CommentedOnNodeInternalDescription = 'commentedOn___node___internal___description',
  CommentedOnNodeInternalFieldOwners = 'commentedOn___node___internal___fieldOwners',
  CommentedOnNodeInternalIgnoreType = 'commentedOn___node___internal___ignoreType',
  CommentedOnNodeInternalMediaType = 'commentedOn___node___internal___mediaType',
  CommentedOnNodeInternalOwner = 'commentedOn___node___internal___owner',
  CommentedOnNodeInternalType = 'commentedOn___node___internal___type',
  CommentedOnNodeIsContentNode = 'commentedOn___node___isContentNode',
  CommentedOnNodeIsTermNode = 'commentedOn___node___isTermNode',
  CommentedOnNodeLink = 'commentedOn___node___link',
  CommentedOnNodeModified = 'commentedOn___node___modified',
  CommentedOnNodeModifiedGmt = 'commentedOn___node___modifiedGmt',
  CommentedOnNodeNodeType = 'commentedOn___node___nodeType',
  CommentedOnNodeParentChildren = 'commentedOn___node___parent___children',
  CommentedOnNodeParentId = 'commentedOn___node___parent___id',
  CommentedOnNodeSlug = 'commentedOn___node___slug',
  CommentedOnNodeStatus = 'commentedOn___node___status',
  CommentedOnNodeTemplateTemplateName = 'commentedOn___node___template___templateName',
  CommentedOnNodeUri = 'commentedOn___node___uri',
  Content = 'content',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Karma = 'karma',
  NodeType = 'nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  RepliesNodes = 'replies___nodes',
  RepliesNodesAgent = 'replies___nodes___agent',
  RepliesNodesApproved = 'replies___nodes___approved',
  RepliesNodesAuthorIp = 'replies___nodes___authorIp',
  RepliesNodesChildren = 'replies___nodes___children',
  RepliesNodesChildrenChildren = 'replies___nodes___children___children',
  RepliesNodesChildrenId = 'replies___nodes___children___id',
  RepliesNodesContent = 'replies___nodes___content',
  RepliesNodesDatabaseId = 'replies___nodes___databaseId',
  RepliesNodesDate = 'replies___nodes___date',
  RepliesNodesDateGmt = 'replies___nodes___dateGmt',
  RepliesNodesId = 'replies___nodes___id',
  RepliesNodesInternalContent = 'replies___nodes___internal___content',
  RepliesNodesInternalContentDigest = 'replies___nodes___internal___contentDigest',
  RepliesNodesInternalDescription = 'replies___nodes___internal___description',
  RepliesNodesInternalFieldOwners = 'replies___nodes___internal___fieldOwners',
  RepliesNodesInternalIgnoreType = 'replies___nodes___internal___ignoreType',
  RepliesNodesInternalMediaType = 'replies___nodes___internal___mediaType',
  RepliesNodesInternalOwner = 'replies___nodes___internal___owner',
  RepliesNodesInternalType = 'replies___nodes___internal___type',
  RepliesNodesKarma = 'replies___nodes___karma',
  RepliesNodesNodeType = 'replies___nodes___nodeType',
  RepliesNodesParentDatabaseId = 'replies___nodes___parentDatabaseId',
  RepliesNodesParentId = 'replies___nodes___parentId',
  RepliesNodesParentChildren = 'replies___nodes___parent___children',
  RepliesNodesParentId = 'replies___nodes___parent___id',
  RepliesNodesRepliesNodes = 'replies___nodes___replies___nodes',
  RepliesNodesType = 'replies___nodes___type',
  Type = 'type',
  WpParentNodeAgent = 'wpParent___node___agent',
  WpParentNodeApproved = 'wpParent___node___approved',
  WpParentNodeAuthorIp = 'wpParent___node___authorIp',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeContent = 'wpParent___node___content',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  WpParentNodeKarma = 'wpParent___node___karma',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentDatabaseId = 'wpParent___node___parentDatabaseId',
  WpParentNodeParentId = 'wpParent___node___parentId',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodeRepliesNodes = 'wpParent___node___replies___nodes',
  WpParentNodeType = 'wpParent___node___type'
}

export type WpCommentFilterInput = {
  agent?: InputMaybe<StringQueryOperatorInput>;
  approved?: InputMaybe<BooleanQueryOperatorInput>;
  author?: InputMaybe<WpCommentToCommenterConnectionEdgeFilterInput>;
  authorIp?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentedOn?: InputMaybe<WpCommentToContentNodeConnectionEdgeFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  karma?: InputMaybe<IntQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  replies?: InputMaybe<WpCommentToCommentConnectionFilterInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  wpParent?: InputMaybe<WpCommentToParentCommentConnectionEdgeFilterInput>;
};

export type WpCommentFilterListInput = {
  elemMatch?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommentGroupConnection = {
  __typename?: 'WpCommentGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpCommentEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpCommentGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpComment>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpCommentGroupConnectionDistinctArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionGroupArgs = {
  field: WpCommentFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpCommentGroupConnectionMaxArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionMinArgs = {
  field: WpCommentFieldsEnum;
};


export type WpCommentGroupConnectionSumArgs = {
  field: WpCommentFieldsEnum;
};

export type WpCommentSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpCommentFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToCommentConnection = {
  __typename?: 'WpCommentToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpCommentToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

/** Connection between the Comment type and the Commenter type */
export type WpCommentToCommenterConnectionEdge = {
  __typename?: 'WpCommentToCommenterConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpCommenter>;
};

export type WpCommentToCommenterConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCommenterFilterInput>;
};

/** Connection between the Comment type and the ContentNode type */
export type WpCommentToContentNodeConnectionEdge = {
  __typename?: 'WpCommentToContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpCommentToContentNodeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

/** Connection between the Comment type and the Comment type */
export type WpCommentToParentCommentConnectionEdge = {
  __typename?: 'WpCommentToParentCommentConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpComment>;
};

export type WpCommentToParentCommentConnectionEdgeFilterInput = {
  node?: InputMaybe<WpCommentFilterInput>;
};

export type WpCommenter = {
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The email address of the author of a comment. */
  email?: Maybe<Scalars['String']>;
  /** The globally unique identifier for the comment author. */
  id: Scalars['ID'];
  /** The name of the author of a comment. */
  name?: Maybe<Scalars['String']>;
  /** The url of the author of a comment. */
  url?: Maybe<Scalars['String']>;
};

export type WpCommenterFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpConnection = {
  __typename?: 'WpConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpEdge>;
  group: Array<WpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionGroupArgs = {
  field: WpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpConnectionMaxArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionMinArgs = {
  field: WpFieldsEnum;
};


export type WpConnectionSumArgs = {
  field: WpFieldsEnum;
};

export type WpContentNode = {
  children: Array<Node>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The ID of the node in the database. */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


export type WpContentNodeDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type WpContentNodeModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpContentNodeConnection = {
  __typename?: 'WpContentNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpContentNodeEdge>;
  group: Array<WpContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpContentNodeConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionGroupArgs = {
  field: WpContentNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpContentNodeConnectionMaxArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionMinArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeConnectionSumArgs = {
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeEdge = {
  __typename?: 'WpContentNodeEdge';
  next?: Maybe<WpContentNode>;
  node: WpContentNode;
  previous?: Maybe<WpContentNode>;
};

export enum WpContentNodeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Guid = 'guid',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Uri = 'uri'
}

export type WpContentNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentNodeFilterListInput = {
  elemMatch?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpContentNodeGroupConnection = {
  __typename?: 'WpContentNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpContentNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpContentNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpContentNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpContentNodeGroupConnectionDistinctArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionGroupArgs = {
  field: WpContentNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpContentNodeGroupConnectionMaxArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionMinArgs = {
  field: WpContentNodeFieldsEnum;
};


export type WpContentNodeGroupConnectionSumArgs = {
  field: WpContentNodeFieldsEnum;
};

export type WpContentNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpContentNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the ContentNode type and the ContentType type */
export type WpContentNodeToContentTypeConnectionEdge = {
  __typename?: 'WpContentNodeToContentTypeConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentType>;
};

export type WpContentNodeToContentTypeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentTypeFilterInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLastConnectionEdge = {
  __typename?: 'WpContentNodeToEditLastConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentNodeToEditLastConnectionEdgeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

/** Connection between the ContentNode type and the User type */
export type WpContentNodeToEditLockConnectionEdge = {
  __typename?: 'WpContentNodeToEditLockConnectionEdge';
  /** The timestamp for when the node was last edited */
  lockTimestamp?: Maybe<Scalars['String']>;
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

export type WpContentTemplateFilterInput = {
  templateName?: InputMaybe<StringQueryOperatorInput>;
};

/** An Post Type object */
export type WpContentType = Node & WpNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpContentType';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  /** Whether this content type should can be exported. */
  canExport?: Maybe<Scalars['Boolean']>;
  children: Array<Node>;
  /** Connection between the ContentType type and the Taxonomy type */
  connectedTaxonomies?: Maybe<WpContentTypeToTaxonomyConnection>;
  /** Connection between the ContentType type and the ContentNode type */
  contentNodes?: Maybe<WpContentTypeToContentNodeConnection>;
  /** Whether content of this type should be deleted when the author of it is deleted from the system. */
  deleteWithUser?: Maybe<Scalars['Boolean']>;
  /** Description of the content type. */
  description?: Maybe<Scalars['String']>;
  /** Whether to exclude nodes of this content type from front end search results. */
  excludeFromSearch?: Maybe<Scalars['Boolean']>;
  /** The plural name of the content type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the content type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether this content type should have archives. Content archives are generated by type and by date. */
  hasArchive?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is hierarchical, for example pages. */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Display name of the content type. */
  label?: Maybe<Scalars['String']>;
  /** Details about the content type labels. */
  labels?: Maybe<WpPostTypeLabelDetails>;
  /** The name of the icon file to display as a menu icon. */
  menuIcon?: Maybe<Scalars['String']>;
  /** The position of this post type in the menu. Only applies if show_in_menu is true. */
  menuPosition?: Maybe<Scalars['Int']>;
  /** The internal name of the post type. This should not be used for display purposes. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
  public?: Maybe<Scalars['Boolean']>;
  /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
  publiclyQueryable?: Maybe<Scalars['Boolean']>;
  /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Makes this content type available via the admin bar. */
  showInAdminBar?: Maybe<Scalars['Boolean']>;
  /** Whether to add the content type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Makes this content type available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing this content type in the admin. */
  showUi?: Maybe<Scalars['Boolean']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpContentTypeConnection = {
  __typename?: 'WpContentTypeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpContentTypeEdge>;
  group: Array<WpContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpContentTypeConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionGroupArgs = {
  field: WpContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpContentTypeConnectionMaxArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionMinArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeConnectionSumArgs = {
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeEdge = {
  __typename?: 'WpContentTypeEdge';
  next?: Maybe<WpContentType>;
  node: WpContentType;
  previous?: Maybe<WpContentType>;
};

export enum WpContentTypeFieldsEnum {
  ArchivePath = 'archivePath',
  CanExport = 'canExport',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ConnectedTaxonomiesNodes = 'connectedTaxonomies___nodes',
  ConnectedTaxonomiesNodesArchivePath = 'connectedTaxonomies___nodes___archivePath',
  ConnectedTaxonomiesNodesChildren = 'connectedTaxonomies___nodes___children',
  ConnectedTaxonomiesNodesChildrenChildren = 'connectedTaxonomies___nodes___children___children',
  ConnectedTaxonomiesNodesChildrenId = 'connectedTaxonomies___nodes___children___id',
  ConnectedTaxonomiesNodesConnectedContentTypesNodes = 'connectedTaxonomies___nodes___connectedContentTypes___nodes',
  ConnectedTaxonomiesNodesDescription = 'connectedTaxonomies___nodes___description',
  ConnectedTaxonomiesNodesGraphqlPluralName = 'connectedTaxonomies___nodes___graphqlPluralName',
  ConnectedTaxonomiesNodesGraphqlSingleName = 'connectedTaxonomies___nodes___graphqlSingleName',
  ConnectedTaxonomiesNodesHierarchical = 'connectedTaxonomies___nodes___hierarchical',
  ConnectedTaxonomiesNodesId = 'connectedTaxonomies___nodes___id',
  ConnectedTaxonomiesNodesInternalContent = 'connectedTaxonomies___nodes___internal___content',
  ConnectedTaxonomiesNodesInternalContentDigest = 'connectedTaxonomies___nodes___internal___contentDigest',
  ConnectedTaxonomiesNodesInternalDescription = 'connectedTaxonomies___nodes___internal___description',
  ConnectedTaxonomiesNodesInternalFieldOwners = 'connectedTaxonomies___nodes___internal___fieldOwners',
  ConnectedTaxonomiesNodesInternalIgnoreType = 'connectedTaxonomies___nodes___internal___ignoreType',
  ConnectedTaxonomiesNodesInternalMediaType = 'connectedTaxonomies___nodes___internal___mediaType',
  ConnectedTaxonomiesNodesInternalOwner = 'connectedTaxonomies___nodes___internal___owner',
  ConnectedTaxonomiesNodesInternalType = 'connectedTaxonomies___nodes___internal___type',
  ConnectedTaxonomiesNodesLabel = 'connectedTaxonomies___nodes___label',
  ConnectedTaxonomiesNodesName = 'connectedTaxonomies___nodes___name',
  ConnectedTaxonomiesNodesNodeType = 'connectedTaxonomies___nodes___nodeType',
  ConnectedTaxonomiesNodesParentChildren = 'connectedTaxonomies___nodes___parent___children',
  ConnectedTaxonomiesNodesParentId = 'connectedTaxonomies___nodes___parent___id',
  ConnectedTaxonomiesNodesPublic = 'connectedTaxonomies___nodes___public',
  ConnectedTaxonomiesNodesRestBase = 'connectedTaxonomies___nodes___restBase',
  ConnectedTaxonomiesNodesRestControllerClass = 'connectedTaxonomies___nodes___restControllerClass',
  ConnectedTaxonomiesNodesShowCloud = 'connectedTaxonomies___nodes___showCloud',
  ConnectedTaxonomiesNodesShowInAdminColumn = 'connectedTaxonomies___nodes___showInAdminColumn',
  ConnectedTaxonomiesNodesShowInGraphql = 'connectedTaxonomies___nodes___showInGraphql',
  ConnectedTaxonomiesNodesShowInMenu = 'connectedTaxonomies___nodes___showInMenu',
  ConnectedTaxonomiesNodesShowInNavMenus = 'connectedTaxonomies___nodes___showInNavMenus',
  ConnectedTaxonomiesNodesShowInQuickEdit = 'connectedTaxonomies___nodes___showInQuickEdit',
  ConnectedTaxonomiesNodesShowInRest = 'connectedTaxonomies___nodes___showInRest',
  ConnectedTaxonomiesNodesShowUi = 'connectedTaxonomies___nodes___showUi',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesChildren = 'contentNodes___nodes___children',
  ContentNodesNodesChildrenChildren = 'contentNodes___nodes___children___children',
  ContentNodesNodesChildrenId = 'contentNodes___nodes___children___id',
  ContentNodesNodesContentTypeName = 'contentNodes___nodes___contentTypeName',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesInternalContent = 'contentNodes___nodes___internal___content',
  ContentNodesNodesInternalContentDigest = 'contentNodes___nodes___internal___contentDigest',
  ContentNodesNodesInternalDescription = 'contentNodes___nodes___internal___description',
  ContentNodesNodesInternalFieldOwners = 'contentNodes___nodes___internal___fieldOwners',
  ContentNodesNodesInternalIgnoreType = 'contentNodes___nodes___internal___ignoreType',
  ContentNodesNodesInternalMediaType = 'contentNodes___nodes___internal___mediaType',
  ContentNodesNodesInternalOwner = 'contentNodes___nodes___internal___owner',
  ContentNodesNodesInternalType = 'contentNodes___nodes___internal___type',
  ContentNodesNodesIsContentNode = 'contentNodes___nodes___isContentNode',
  ContentNodesNodesIsTermNode = 'contentNodes___nodes___isTermNode',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  ContentNodesNodesParentChildren = 'contentNodes___nodes___parent___children',
  ContentNodesNodesParentId = 'contentNodes___nodes___parent___id',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  DeleteWithUser = 'deleteWithUser',
  Description = 'description',
  ExcludeFromSearch = 'excludeFromSearch',
  GraphqlPluralName = 'graphqlPluralName',
  GraphqlSingleName = 'graphqlSingleName',
  HasArchive = 'hasArchive',
  Hierarchical = 'hierarchical',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsFrontPage = 'isFrontPage',
  IsPostsPage = 'isPostsPage',
  IsTermNode = 'isTermNode',
  Label = 'label',
  LabelsAddNew = 'labels___addNew',
  LabelsAddNewItem = 'labels___addNewItem',
  LabelsAllItems = 'labels___allItems',
  LabelsArchives = 'labels___archives',
  LabelsAttributes = 'labels___attributes',
  LabelsEditItem = 'labels___editItem',
  LabelsFeaturedImage = 'labels___featuredImage',
  LabelsFilterItemsList = 'labels___filterItemsList',
  LabelsInsertIntoItem = 'labels___insertIntoItem',
  LabelsItemsList = 'labels___itemsList',
  LabelsItemsListNavigation = 'labels___itemsListNavigation',
  LabelsMenuName = 'labels___menuName',
  LabelsName = 'labels___name',
  LabelsNewItem = 'labels___newItem',
  LabelsNotFound = 'labels___notFound',
  LabelsNotFoundInTrash = 'labels___notFoundInTrash',
  LabelsParentItemColon = 'labels___parentItemColon',
  LabelsRemoveFeaturedImage = 'labels___removeFeaturedImage',
  LabelsSearchItems = 'labels___searchItems',
  LabelsSetFeaturedImage = 'labels___setFeaturedImage',
  LabelsSingularName = 'labels___singularName',
  LabelsUploadedToThisItem = 'labels___uploadedToThisItem',
  LabelsUseFeaturedImage = 'labels___useFeaturedImage',
  LabelsViewItem = 'labels___viewItem',
  LabelsViewItems = 'labels___viewItems',
  MenuIcon = 'menuIcon',
  MenuPosition = 'menuPosition',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Public = 'public',
  PubliclyQueryable = 'publiclyQueryable',
  RestBase = 'restBase',
  RestControllerClass = 'restControllerClass',
  ShowInAdminBar = 'showInAdminBar',
  ShowInGraphql = 'showInGraphql',
  ShowInMenu = 'showInMenu',
  ShowInNavMenus = 'showInNavMenus',
  ShowInRest = 'showInRest',
  ShowUi = 'showUi',
  Uri = 'uri'
}

export type WpContentTypeFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  canExport?: InputMaybe<BooleanQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedTaxonomies?: InputMaybe<WpContentTypeToTaxonomyConnectionFilterInput>;
  contentNodes?: InputMaybe<WpContentTypeToContentNodeConnectionFilterInput>;
  deleteWithUser?: InputMaybe<BooleanQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  excludeFromSearch?: InputMaybe<BooleanQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hasArchive?: InputMaybe<BooleanQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  labels?: InputMaybe<WpPostTypeLabelDetailsFilterInput>;
  menuIcon?: InputMaybe<StringQueryOperatorInput>;
  menuPosition?: InputMaybe<IntQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  publiclyQueryable?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showInAdminBar?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpContentTypeFilterListInput = {
  elemMatch?: InputMaybe<WpContentTypeFilterInput>;
};

export type WpContentTypeGroupConnection = {
  __typename?: 'WpContentTypeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpContentTypeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpContentTypeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpContentType>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpContentTypeGroupConnectionDistinctArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionGroupArgs = {
  field: WpContentTypeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpContentTypeGroupConnectionMaxArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionMinArgs = {
  field: WpContentTypeFieldsEnum;
};


export type WpContentTypeGroupConnectionSumArgs = {
  field: WpContentTypeFieldsEnum;
};

export type WpContentTypeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpContentTypeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the ContentType type and the ContentNode type */
export type WpContentTypeToContentNodeConnection = {
  __typename?: 'WpContentTypeToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpContentTypeToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the ContentType type and the Taxonomy type */
export type WpContentTypeToTaxonomyConnection = {
  __typename?: 'WpContentTypeToTaxonomyConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTaxonomy>>>;
};

export type WpContentTypeToTaxonomyConnectionFilterInput = {
  nodes?: InputMaybe<WpTaxonomyFilterListInput>;
};

/** core/archives block */
export type WpCoreArchivesBlock = WpBlock & {
  __typename?: 'WpCoreArchivesBlock';
  attributes?: Maybe<WpCoreArchivesBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreArchivesBlockAttributes = {
  __typename?: 'WpCoreArchivesBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayAsDropdown: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  showPostCounts: Scalars['Boolean'];
};

/** core/audio block */
export type WpCoreAudioBlock = WpBlock & {
  __typename?: 'WpCoreAudioBlock';
  attributes?: Maybe<WpCoreAudioBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreAudioBlockAttributes = {
  __typename?: 'WpCoreAudioBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  loop?: Maybe<Scalars['Boolean']>;
  preload?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

export type WpCoreAudioBlockAttributesUnion = WpCoreAudioBlockAttributes | WpCoreAudioBlockDeprecatedV1Attributes;

export type WpCoreAudioBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreAudioBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  loop?: Maybe<Scalars['Boolean']>;
  preload?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
};

/** core/block block */
export type WpCoreBlock = WpBlock & {
  __typename?: 'WpCoreBlock';
  attributes?: Maybe<WpCoreBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  reusableBlock: WpNode;
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreBlockAttributes = {
  __typename?: 'WpCoreBlockAttributes';
  lock?: Maybe<Scalars['JSON']>;
  ref?: Maybe<Scalars['Float']>;
};

/** core/button block */
export type WpCoreButtonBlock = WpBlock & {
  __typename?: 'WpCoreButtonBlock';
  attributes?: Maybe<WpCoreButtonBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreButtonBlockAttributes = {
  __typename?: 'WpCoreButtonBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockAttributesUnion = WpCoreButtonBlockAttributes | WpCoreButtonBlockDeprecatedV1Attributes | WpCoreButtonBlockDeprecatedV2Attributes | WpCoreButtonBlockDeprecatedV3Attributes | WpCoreButtonBlockDeprecatedV4Attributes | WpCoreButtonBlockDeprecatedV5Attributes | WpCoreButtonBlockDeprecatedV6Attributes | WpCoreButtonBlockDeprecatedV7Attributes | WpCoreButtonBlockDeprecatedV8Attributes | WpCoreButtonBlockDeprecatedV9Attributes | WpCoreButtonBlockDeprecatedV10Attributes;

export type WpCoreButtonBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV5Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV6Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV6Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV7Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV7Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV8Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV8Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV9Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV9Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreButtonBlockDeprecatedV10Attributes = {
  __typename?: 'WpCoreButtonBlockDeprecatedV10Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** core/buttons block */
export type WpCoreButtonsBlock = WpBlock & {
  __typename?: 'WpCoreButtonsBlock';
  attributes?: Maybe<WpCoreButtonsBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreButtonsBlockAttributes = {
  __typename?: 'WpCoreButtonsBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
};

export type WpCoreButtonsBlockAttributesUnion = WpCoreButtonsBlockAttributes | WpCoreButtonsBlockDeprecatedV1Attributes | WpCoreButtonsBlockDeprecatedV2Attributes;

export type WpCoreButtonsBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreButtonsBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
};

export type WpCoreButtonsBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreButtonsBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
};

/** core/calendar block */
export type WpCoreCalendarBlock = WpBlock & {
  __typename?: 'WpCoreCalendarBlock';
  attributes?: Maybe<WpCoreCalendarBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCalendarBlockAttributes = {
  __typename?: 'WpCoreCalendarBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  month?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** core/categories block */
export type WpCoreCategoriesBlock = WpBlock & {
  __typename?: 'WpCoreCategoriesBlock';
  attributes?: Maybe<WpCoreCategoriesBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCategoriesBlockAttributes = {
  __typename?: 'WpCoreCategoriesBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayAsDropdown: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  showHierarchy: Scalars['Boolean'];
  showOnlyTopLevel: Scalars['Boolean'];
  showPostCounts: Scalars['Boolean'];
};

/** core/code block */
export type WpCoreCodeBlock = WpBlock & {
  __typename?: 'WpCoreCodeBlock';
  attributes?: Maybe<WpCoreCodeBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCodeBlockAttributes = {
  __typename?: 'WpCoreCodeBlockAttributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/column block */
export type WpCoreColumnBlock = WpBlock & {
  __typename?: 'WpCoreColumnBlock';
  attributes?: Maybe<WpCoreColumnBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreColumnBlockAttributes = {
  __typename?: 'WpCoreColumnBlockAttributes';
  allowedBlocks?: Maybe<Scalars['JSON']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type WpCoreColumnBlockAttributesUnion = WpCoreColumnBlockAttributes | WpCoreColumnBlockDeprecatedV1Attributes;

export type WpCoreColumnBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreColumnBlockDeprecatedV1Attributes';
  allowedBlocks?: Maybe<Scalars['JSON']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

/** core/columns block */
export type WpCoreColumnsBlock = WpBlock & {
  __typename?: 'WpCoreColumnsBlock';
  attributes?: Maybe<WpCoreColumnsBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockAttributes = {
  __typename?: 'WpCoreColumnsBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isStackedOnMobile: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockAttributesUnion = WpCoreColumnsBlockAttributes | WpCoreColumnsBlockDeprecatedV1Attributes | WpCoreColumnsBlockDeprecatedV2Attributes | WpCoreColumnsBlockDeprecatedV3Attributes;

export type WpCoreColumnsBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreColumnsBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isStackedOnMobile: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreColumnsBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isStackedOnMobile: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreColumnsBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreColumnsBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isStackedOnMobile: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** core/cover block */
export type WpCoreCoverBlock = WpBlock & {
  __typename?: 'WpCoreCoverBlock';
  attributes?: Maybe<WpCoreCoverBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockAttributes = {
  __typename?: 'WpCoreCoverBlockAttributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockAttributesUnion = WpCoreCoverBlockAttributes | WpCoreCoverBlockDeprecatedV1Attributes | WpCoreCoverBlockDeprecatedV2Attributes | WpCoreCoverBlockDeprecatedV3Attributes | WpCoreCoverBlockDeprecatedV4Attributes | WpCoreCoverBlockDeprecatedV5Attributes | WpCoreCoverBlockDeprecatedV6Attributes | WpCoreCoverBlockDeprecatedV7Attributes;

export type WpCoreCoverBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV5Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV6Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV6Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreCoverBlockDeprecatedV7Attributes = {
  __typename?: 'WpCoreCoverBlockDeprecatedV7Attributes';
  align?: Maybe<Scalars['String']>;
  allowedBlocks?: Maybe<Scalars['JSON']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundType: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  contentPosition?: Maybe<Scalars['String']>;
  customGradient?: Maybe<Scalars['String']>;
  customOverlayColor?: Maybe<Scalars['String']>;
  dimRatio: Scalars['Float'];
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  hasParallax: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  isDark: Scalars['Boolean'];
  isRepeated: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  minHeight?: Maybe<Scalars['Float']>;
  minHeightUnit?: Maybe<Scalars['String']>;
  overlayColor?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  url?: Maybe<Scalars['String']>;
};

/** core/embed block */
export type WpCoreEmbedBlock = WpBlock & {
  __typename?: 'WpCoreEmbedBlock';
  attributes?: Maybe<WpCoreEmbedBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedBlockAttributes = {
  __typename?: 'WpCoreEmbedBlockAttributes';
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  previewable: Scalars['Boolean'];
  providerNameSlug?: Maybe<Scalars['String']>;
  responsive: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreEmbedBlockAttributesUnion = WpCoreEmbedBlockAttributes | WpCoreEmbedBlockDeprecatedV1Attributes;

export type WpCoreEmbedBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreEmbedBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  allowResponsive: Scalars['Boolean'];
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  previewable: Scalars['Boolean'];
  providerNameSlug?: Maybe<Scalars['String']>;
  responsive: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/file block */
export type WpCoreFileBlock = WpBlock & {
  __typename?: 'WpCoreFileBlock';
  attributes?: Maybe<WpCoreFileBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreFileBlockAttributes = {
  __typename?: 'WpCoreFileBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayPreview?: Maybe<Scalars['Boolean']>;
  downloadButtonText?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  previewHeight: Scalars['Float'];
  showDownloadButton: Scalars['Boolean'];
  textLinkHref?: Maybe<Scalars['String']>;
  textLinkTarget?: Maybe<Scalars['String']>;
};

export type WpCoreFileBlockAttributesUnion = WpCoreFileBlockAttributes | WpCoreFileBlockDeprecatedV1Attributes;

export type WpCoreFileBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreFileBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayPreview?: Maybe<Scalars['Boolean']>;
  downloadButtonText?: Maybe<Scalars['String']>;
  fileId?: Maybe<Scalars['String']>;
  fileName?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  previewHeight: Scalars['Float'];
  showDownloadButton: Scalars['Boolean'];
  textLinkHref?: Maybe<Scalars['String']>;
  textLinkTarget?: Maybe<Scalars['String']>;
};

/** core/freeform block */
export type WpCoreFreeformBlock = WpBlock & {
  __typename?: 'WpCoreFreeformBlock';
  attributes?: Maybe<WpCoreFreeformBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreFreeformBlockAttributes = {
  __typename?: 'WpCoreFreeformBlockAttributes';
  content?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/gallery block */
export type WpCoreGalleryBlock = WpBlock & {
  __typename?: 'WpCoreGalleryBlock';
  attributes?: Maybe<WpCoreGalleryBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockAttributes = {
  __typename?: 'WpCoreGalleryBlockAttributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockAttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockAttributesImages = {
  __typename?: 'WpCoreGalleryBlockAttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockAttributesUnion = WpCoreGalleryBlockAttributes | WpCoreGalleryBlockDeprecatedV1Attributes | WpCoreGalleryBlockDeprecatedV2Attributes | WpCoreGalleryBlockDeprecatedV3Attributes | WpCoreGalleryBlockDeprecatedV4Attributes | WpCoreGalleryBlockDeprecatedV5Attributes | WpCoreGalleryBlockDeprecatedV6Attributes;

export type WpCoreGalleryBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV1AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV1AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV1AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV2AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV2AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV2AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV3AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV3AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV3AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV4AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV4AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV4AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV5Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV5AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV5AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV5AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreGalleryBlockDeprecatedV6Attributes = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV6Attributes';
  align?: Maybe<Scalars['String']>;
  allowResize: Scalars['Boolean'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  columns?: Maybe<Scalars['Float']>;
  fixedHeight: Scalars['Boolean'];
  ids: Array<Maybe<Scalars['Float']>>;
  imageCrop: Scalars['Boolean'];
  images: Array<Maybe<WpCoreGalleryBlockDeprecatedV6AttributesImages>>;
  linkTarget?: Maybe<Scalars['String']>;
  linkTo?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  shortCodeTransforms: Array<Maybe<WpBlockAttributesObject>>;
  sizeSlug: Scalars['String'];
};

export type WpCoreGalleryBlockDeprecatedV6AttributesImages = {
  __typename?: 'WpCoreGalleryBlockDeprecatedV6AttributesImages';
  alt: Scalars['String'];
  caption?: Maybe<Scalars['String']>;
  fullUrl?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/group block */
export type WpCoreGroupBlock = WpBlock & {
  __typename?: 'WpCoreGroupBlock';
  attributes?: Maybe<WpCoreGroupBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockAttributes = {
  __typename?: 'WpCoreGroupBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockAttributesUnion = WpCoreGroupBlockAttributes | WpCoreGroupBlockDeprecatedV1Attributes | WpCoreGroupBlockDeprecatedV2Attributes | WpCoreGroupBlockDeprecatedV3Attributes | WpCoreGroupBlockDeprecatedV4Attributes;

export type WpCoreGroupBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreGroupBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreGroupBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreGroupBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreGroupBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreGroupBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

/** core/heading block */
export type WpCoreHeadingBlock = WpBlock & {
  __typename?: 'WpCoreHeadingBlock';
  attributes?: Maybe<WpCoreHeadingBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockAttributes = {
  __typename?: 'WpCoreHeadingBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockAttributesUnion = WpCoreHeadingBlockAttributes | WpCoreHeadingBlockDeprecatedV1Attributes | WpCoreHeadingBlockDeprecatedV2Attributes | WpCoreHeadingBlockDeprecatedV3Attributes | WpCoreHeadingBlockDeprecatedV4Attributes;

export type WpCoreHeadingBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreHeadingBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreHeadingBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreHeadingBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreHeadingBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreHeadingBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/html block */
export type WpCoreHtmlBlock = WpBlock & {
  __typename?: 'WpCoreHtmlBlock';
  attributes?: Maybe<WpCoreHtmlBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreHtmlBlockAttributes = {
  __typename?: 'WpCoreHtmlBlockAttributes';
  content?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/image block */
export type WpCoreImageBlock = WpBlock & {
  __typename?: 'WpCoreImageBlock';
  attributes?: Maybe<WpCoreImageBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreImageBlockAttributes = {
  __typename?: 'WpCoreImageBlockAttributes';
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  imageFluid?: Maybe<File>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockAttributesUnion = WpCoreImageBlockAttributes | WpCoreImageBlockDeprecatedV1Attributes | WpCoreImageBlockDeprecatedV2Attributes | WpCoreImageBlockDeprecatedV3Attributes;

export type WpCoreImageBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreImageBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreImageBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

export type WpCoreImageBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreImageBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  alt: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  href?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  rel?: Maybe<Scalars['String']>;
  sizeSlug?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
};

/** core/latest-comments block */
export type WpCoreLatestCommentsBlock = WpBlock & {
  __typename?: 'WpCoreLatestCommentsBlock';
  attributes?: Maybe<WpCoreLatestCommentsBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLatestCommentsBlockAttributes = {
  __typename?: 'WpCoreLatestCommentsBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  commentsToShow: Scalars['Float'];
  displayAvatar: Scalars['Boolean'];
  displayDate: Scalars['Boolean'];
  displayExcerpt: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
};

/** core/latest-posts block */
export type WpCoreLatestPostsBlock = WpBlock & {
  __typename?: 'WpCoreLatestPostsBlock';
  attributes?: Maybe<WpCoreLatestPostsBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLatestPostsBlockAttributes = {
  __typename?: 'WpCoreLatestPostsBlockAttributes';
  addLinkToFeaturedImage: Scalars['Boolean'];
  align?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayFeaturedImage: Scalars['Boolean'];
  displayPostContent: Scalars['Boolean'];
  displayPostContentRadio: Scalars['String'];
  displayPostDate: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  featuredImageAlign?: Maybe<Scalars['String']>;
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  featuredImageSizeSlug: Scalars['String'];
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  order: Scalars['String'];
  orderBy: Scalars['String'];
  postLayout: Scalars['String'];
  postsToShow: Scalars['Float'];
  selectedAuthor?: Maybe<Scalars['Float']>;
};

export type WpCoreLatestPostsBlockAttributesUnion = WpCoreLatestPostsBlockAttributes | WpCoreLatestPostsBlockDeprecatedV1Attributes;

export type WpCoreLatestPostsBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreLatestPostsBlockDeprecatedV1Attributes';
  addLinkToFeaturedImage: Scalars['Boolean'];
  align?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayFeaturedImage: Scalars['Boolean'];
  displayPostContent: Scalars['Boolean'];
  displayPostContentRadio: Scalars['String'];
  displayPostDate: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  featuredImageAlign?: Maybe<Scalars['String']>;
  featuredImageSizeHeight?: Maybe<Scalars['Float']>;
  featuredImageSizeSlug: Scalars['String'];
  featuredImageSizeWidth?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  order: Scalars['String'];
  orderBy: Scalars['String'];
  postLayout: Scalars['String'];
  postsToShow: Scalars['Float'];
  selectedAuthor?: Maybe<Scalars['Float']>;
};

/** core/legacy-widget block */
export type WpCoreLegacyWidgetBlock = WpBlock & {
  __typename?: 'WpCoreLegacyWidgetBlock';
  attributes?: Maybe<WpCoreLegacyWidgetBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLegacyWidgetBlockAttributes = {
  __typename?: 'WpCoreLegacyWidgetBlockAttributes';
  id?: Maybe<Scalars['String']>;
  idBase?: Maybe<Scalars['String']>;
  instance?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/list block */
export type WpCoreListBlock = WpBlock & {
  __typename?: 'WpCoreListBlock';
  attributes?: Maybe<WpCoreListBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreListBlockAttributes = {
  __typename?: 'WpCoreListBlockAttributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  ordered: Scalars['Boolean'];
  placeholder?: Maybe<Scalars['String']>;
  reversed?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['Float']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values: Scalars['String'];
};

export type WpCoreListBlockAttributesUnion = WpCoreListBlockAttributes | WpCoreListBlockDeprecatedV1Attributes;

export type WpCoreListBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreListBlockDeprecatedV1Attributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  ordered: Scalars['Boolean'];
  placeholder?: Maybe<Scalars['String']>;
  reversed?: Maybe<Scalars['Boolean']>;
  start?: Maybe<Scalars['Float']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  values: Scalars['String'];
};

/** core/loginout block */
export type WpCoreLoginoutBlock = WpBlock & {
  __typename?: 'WpCoreLoginoutBlock';
  attributes?: Maybe<WpCoreLoginoutBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreLoginoutBlockAttributes = {
  __typename?: 'WpCoreLoginoutBlockAttributes';
  className?: Maybe<Scalars['String']>;
  displayLoginAsForm: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  redirectToCurrent: Scalars['Boolean'];
};

/** core/media-text block */
export type WpCoreMediaTextBlock = WpBlock & {
  __typename?: 'WpCoreMediaTextBlock';
  attributes?: Maybe<WpCoreMediaTextBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockAttributes = {
  __typename?: 'WpCoreMediaTextBlockAttributes';
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaSizeSlug?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockAttributesUnion = WpCoreMediaTextBlockAttributes | WpCoreMediaTextBlockDeprecatedV1Attributes | WpCoreMediaTextBlockDeprecatedV2Attributes | WpCoreMediaTextBlockDeprecatedV3Attributes;

export type WpCoreMediaTextBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreMediaTextBlockDeprecatedV1Attributes';
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaSizeSlug?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreMediaTextBlockDeprecatedV2Attributes';
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaSizeSlug?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

export type WpCoreMediaTextBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreMediaTextBlockDeprecatedV3Attributes';
  align: Scalars['String'];
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  focalPoint?: Maybe<Scalars['JSON']>;
  gradient?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
  imageFill?: Maybe<Scalars['Boolean']>;
  isStackedOnMobile: Scalars['Boolean'];
  linkClass?: Maybe<Scalars['String']>;
  linkDestination?: Maybe<Scalars['String']>;
  linkTarget?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  mediaAlt: Scalars['String'];
  mediaId?: Maybe<Scalars['Float']>;
  mediaLink?: Maybe<Scalars['String']>;
  mediaPosition: Scalars['String'];
  mediaSizeSlug?: Maybe<Scalars['String']>;
  mediaType?: Maybe<Scalars['String']>;
  mediaUrl?: Maybe<Scalars['String']>;
  mediaWidth: Scalars['Float'];
  rel?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  verticalAlignment?: Maybe<Scalars['String']>;
};

/** core/missing block */
export type WpCoreMissingBlock = WpBlock & {
  __typename?: 'WpCoreMissingBlock';
  attributes?: Maybe<WpCoreMissingBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMissingBlockAttributes = {
  __typename?: 'WpCoreMissingBlockAttributes';
  lock?: Maybe<Scalars['JSON']>;
  originalContent?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  originalUndelimitedContent?: Maybe<Scalars['String']>;
};

/** core/more block */
export type WpCoreMoreBlock = WpBlock & {
  __typename?: 'WpCoreMoreBlock';
  attributes?: Maybe<WpCoreMoreBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreMoreBlockAttributes = {
  __typename?: 'WpCoreMoreBlockAttributes';
  customText?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  noTeaser: Scalars['Boolean'];
};

/** core/navigation block */
export type WpCoreNavigationBlock = WpBlock & {
  __typename?: 'WpCoreNavigationBlock';
  attributes?: Maybe<WpCoreNavigationBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockAttributes = {
  __typename?: 'WpCoreNavigationBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockAttributesUnion = WpCoreNavigationBlockAttributes | WpCoreNavigationBlockDeprecatedV1Attributes | WpCoreNavigationBlockDeprecatedV2Attributes | WpCoreNavigationBlockDeprecatedV3Attributes | WpCoreNavigationBlockDeprecatedV4Attributes | WpCoreNavigationBlockDeprecatedV5Attributes | WpCoreNavigationBlockDeprecatedV6Attributes;

export type WpCoreNavigationBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockDeprecatedV5Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationBlockDeprecatedV6Attributes = {
  __typename?: 'WpCoreNavigationBlockDeprecatedV6Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayBackgroundColor?: Maybe<Scalars['String']>;
  customOverlayTextColor?: Maybe<Scalars['String']>;
  customTextColor?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openSubmenusOnClick: Scalars['Boolean'];
  overlayBackgroundColor?: Maybe<Scalars['String']>;
  overlayMenu: Scalars['String'];
  overlayTextColor?: Maybe<Scalars['String']>;
  ref?: Maybe<Scalars['Float']>;
  rgbBackgroundColor?: Maybe<Scalars['String']>;
  rgbTextColor?: Maybe<Scalars['String']>;
  showSubmenuIcon: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  unstableLocation?: Maybe<Scalars['String']>;
};

/** core/navigation-link block */
export type WpCoreNavigationLinkBlock = WpBlock & {
  __typename?: 'WpCoreNavigationLinkBlock';
  attributes?: Maybe<WpCoreNavigationLinkBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationLinkBlockAttributes = {
  __typename?: 'WpCoreNavigationLinkBlockAttributes';
  className?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  isTopLevelLink?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  opensInNewTab: Scalars['Boolean'];
  rel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationLinkBlockAttributesUnion = WpCoreNavigationLinkBlockAttributes | WpCoreNavigationLinkBlockDeprecatedV1Attributes;

export type WpCoreNavigationLinkBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreNavigationLinkBlockDeprecatedV1Attributes';
  className?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  isTopLevelLink?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  opensInNewTab: Scalars['Boolean'];
  rel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/navigation-submenu block */
export type WpCoreNavigationSubmenuBlock = WpBlock & {
  __typename?: 'WpCoreNavigationSubmenuBlock';
  attributes?: Maybe<WpCoreNavigationSubmenuBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreNavigationSubmenuBlockAttributes = {
  __typename?: 'WpCoreNavigationSubmenuBlockAttributes';
  className?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Float']>;
  isTopLevelItem?: Maybe<Scalars['Boolean']>;
  kind?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  opensInNewTab: Scalars['Boolean'];
  rel?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/nextpage block */
export type WpCoreNextpageBlock = WpBlock & {
  __typename?: 'WpCoreNextpageBlock';
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreNextpageBlockAttributes = {
  __typename?: 'WpCoreNextpageBlockAttributes';
  lock?: Maybe<Scalars['JSON']>;
};

/** core/page-list block */
export type WpCorePageListBlock = WpBlock & {
  __typename?: 'WpCorePageListBlock';
  attributes?: Maybe<WpCorePageListBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePageListBlockAttributes = {
  __typename?: 'WpCorePageListBlockAttributes';
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/paragraph block */
export type WpCoreParagraphBlock = WpBlock & {
  __typename?: 'WpCoreParagraphBlock';
  attributes?: Maybe<WpCoreParagraphBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockAttributes = {
  __typename?: 'WpCoreParagraphBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockAttributesUnion = WpCoreParagraphBlockAttributes | WpCoreParagraphBlockDeprecatedV1Attributes | WpCoreParagraphBlockDeprecatedV2Attributes | WpCoreParagraphBlockDeprecatedV3Attributes | WpCoreParagraphBlockDeprecatedV4Attributes | WpCoreParagraphBlockDeprecatedV5Attributes;

export type WpCoreParagraphBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreParagraphBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreParagraphBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreParagraphBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV4Attributes = {
  __typename?: 'WpCoreParagraphBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreParagraphBlockDeprecatedV5Attributes = {
  __typename?: 'WpCoreParagraphBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  direction?: Maybe<Scalars['String']>;
  dropCap: Scalars['Boolean'];
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/pattern block */
export type WpCorePatternBlock = WpBlock & {
  __typename?: 'WpCorePatternBlock';
  attributes?: Maybe<WpCorePatternBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePatternBlockAttributes = {
  __typename?: 'WpCorePatternBlockAttributes';
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  slug?: Maybe<Scalars['String']>;
};

/** core/post-author block */
export type WpCorePostAuthorBlock = WpBlock & {
  __typename?: 'WpCorePostAuthorBlock';
  attributes?: Maybe<WpCorePostAuthorBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostAuthorBlockAttributes = {
  __typename?: 'WpCorePostAuthorBlockAttributes';
  avatarSize: Scalars['Float'];
  backgroundColor?: Maybe<Scalars['String']>;
  byline?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  showAvatar: Scalars['Boolean'];
  showBio?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/post-comments block */
export type WpCorePostCommentsBlock = WpBlock & {
  __typename?: 'WpCorePostCommentsBlock';
  attributes?: Maybe<WpCorePostCommentsBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostCommentsBlockAttributes = {
  __typename?: 'WpCorePostCommentsBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/post-content block */
export type WpCorePostContentBlock = WpBlock & {
  __typename?: 'WpCorePostContentBlock';
  attributes?: Maybe<WpCorePostContentBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostContentBlockAttributes = {
  __typename?: 'WpCorePostContentBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/post-date block */
export type WpCorePostDateBlock = WpBlock & {
  __typename?: 'WpCorePostDateBlock';
  attributes?: Maybe<WpCorePostDateBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostDateBlockAttributes = {
  __typename?: 'WpCorePostDateBlockAttributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCorePostDateBlockAttributesUnion = WpCorePostDateBlockAttributes | WpCorePostDateBlockDeprecatedV1Attributes;

export type WpCorePostDateBlockDeprecatedV1Attributes = {
  __typename?: 'WpCorePostDateBlockDeprecatedV1Attributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  format?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/post-excerpt block */
export type WpCorePostExcerptBlock = WpBlock & {
  __typename?: 'WpCorePostExcerptBlock';
  attributes?: Maybe<WpCorePostExcerptBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostExcerptBlockAttributes = {
  __typename?: 'WpCorePostExcerptBlockAttributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  moreText?: Maybe<Scalars['String']>;
  showMoreOnNewLine: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/post-featured-image block */
export type WpCorePostFeaturedImageBlock = WpBlock & {
  __typename?: 'WpCorePostFeaturedImageBlock';
  attributes?: Maybe<WpCorePostFeaturedImageBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostFeaturedImageBlockAttributes = {
  __typename?: 'WpCorePostFeaturedImageBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  scale: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['String']>;
};

/** core/post-navigation-link block */
export type WpCorePostNavigationLinkBlock = WpBlock & {
  __typename?: 'WpCorePostNavigationLinkBlock';
  attributes?: Maybe<WpCorePostNavigationLinkBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostNavigationLinkBlockAttributes = {
  __typename?: 'WpCorePostNavigationLinkBlockAttributes';
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  linkLabel: Scalars['Boolean'];
  lock?: Maybe<Scalars['JSON']>;
  showTitle: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  type: Scalars['String'];
};

/** core/post-template block */
export type WpCorePostTemplateBlock = WpBlock & {
  __typename?: 'WpCorePostTemplateBlock';
  attributes?: Maybe<WpCorePostTemplateBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostTemplateBlockAttributes = {
  __typename?: 'WpCorePostTemplateBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/post-terms block */
export type WpCorePostTermsBlock = WpBlock & {
  __typename?: 'WpCorePostTermsBlock';
  attributes?: Maybe<WpCorePostTermsBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostTermsBlockAttributes = {
  __typename?: 'WpCorePostTermsBlockAttributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  separator: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  term?: Maybe<Scalars['String']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/post-title block */
export type WpCorePostTitleBlock = WpBlock & {
  __typename?: 'WpCorePostTitleBlock';
  attributes?: Maybe<WpCorePostTitleBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePostTitleBlockAttributes = {
  __typename?: 'WpCorePostTitleBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  level: Scalars['Float'];
  linkTarget: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  rel: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCorePostTitleBlockAttributesUnion = WpCorePostTitleBlockAttributes | WpCorePostTitleBlockDeprecatedV1Attributes;

export type WpCorePostTitleBlockDeprecatedV1Attributes = {
  __typename?: 'WpCorePostTitleBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  level: Scalars['Float'];
  linkTarget: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  rel: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/preformatted block */
export type WpCorePreformattedBlock = WpBlock & {
  __typename?: 'WpCorePreformattedBlock';
  attributes?: Maybe<WpCorePreformattedBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePreformattedBlockAttributes = {
  __typename?: 'WpCorePreformattedBlockAttributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/pullquote block */
export type WpCorePullquoteBlock = WpBlock & {
  __typename?: 'WpCorePullquoteBlock';
  attributes?: Maybe<WpCorePullquoteBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockAttributes = {
  __typename?: 'WpCorePullquoteBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockAttributesUnion = WpCorePullquoteBlockAttributes | WpCorePullquoteBlockDeprecatedV1Attributes | WpCorePullquoteBlockDeprecatedV2Attributes | WpCorePullquoteBlockDeprecatedV3Attributes | WpCorePullquoteBlockDeprecatedV4Attributes | WpCorePullquoteBlockDeprecatedV5Attributes;

export type WpCorePullquoteBlockDeprecatedV1Attributes = {
  __typename?: 'WpCorePullquoteBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV2Attributes = {
  __typename?: 'WpCorePullquoteBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV3Attributes = {
  __typename?: 'WpCorePullquoteBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV4Attributes = {
  __typename?: 'WpCorePullquoteBlockDeprecatedV4Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type WpCorePullquoteBlockDeprecatedV5Attributes = {
  __typename?: 'WpCorePullquoteBlockDeprecatedV5Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** core/query block */
export type WpCoreQueryBlock = WpBlock & {
  __typename?: 'WpCoreQueryBlock';
  attributes?: Maybe<WpCoreQueryBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryBlockAttributes = {
  __typename?: 'WpCoreQueryBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayLayout: Scalars['JSON'];
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  query: Scalars['JSON'];
  queryId?: Maybe<Scalars['Float']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreQueryBlockAttributesUnion = WpCoreQueryBlockAttributes | WpCoreQueryBlockDeprecatedV1Attributes;

export type WpCoreQueryBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreQueryBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  displayLayout: Scalars['JSON'];
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  query: Scalars['JSON'];
  queryId?: Maybe<Scalars['Float']>;
  style?: Maybe<Scalars['JSON']>;
  tagName: Scalars['String'];
  textColor?: Maybe<Scalars['String']>;
};

/** core/query-pagination block */
export type WpCoreQueryPaginationBlock = WpBlock & {
  __typename?: 'WpCoreQueryPaginationBlock';
  attributes?: Maybe<WpCoreQueryPaginationBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryPaginationBlockAttributes = {
  __typename?: 'WpCoreQueryPaginationBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  paginationArrow: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreQueryPaginationBlockAttributesUnion = WpCoreQueryPaginationBlockAttributes | WpCoreQueryPaginationBlockDeprecatedV1Attributes;

export type WpCoreQueryPaginationBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreQueryPaginationBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  paginationArrow: Scalars['String'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/query-pagination-next block */
export type WpCoreQueryPaginationNextBlock = WpBlock & {
  __typename?: 'WpCoreQueryPaginationNextBlock';
  attributes?: Maybe<WpCoreQueryPaginationNextBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryPaginationNextBlockAttributes = {
  __typename?: 'WpCoreQueryPaginationNextBlockAttributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/query-pagination-numbers block */
export type WpCoreQueryPaginationNumbersBlock = WpBlock & {
  __typename?: 'WpCoreQueryPaginationNumbersBlock';
  attributes?: Maybe<WpCoreQueryPaginationNumbersBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryPaginationNumbersBlockAttributes = {
  __typename?: 'WpCoreQueryPaginationNumbersBlockAttributes';
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/query-pagination-previous block */
export type WpCoreQueryPaginationPreviousBlock = WpBlock & {
  __typename?: 'WpCoreQueryPaginationPreviousBlock';
  attributes?: Maybe<WpCoreQueryPaginationPreviousBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryPaginationPreviousBlockAttributes = {
  __typename?: 'WpCoreQueryPaginationPreviousBlockAttributes';
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/query-title block */
export type WpCoreQueryTitleBlock = WpBlock & {
  __typename?: 'WpCoreQueryTitleBlock';
  attributes?: Maybe<WpCoreQueryTitleBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQueryTitleBlockAttributes = {
  __typename?: 'WpCoreQueryTitleBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type WpCoreQueryTitleBlockAttributesUnion = WpCoreQueryTitleBlockAttributes | WpCoreQueryTitleBlockDeprecatedV1Attributes;

export type WpCoreQueryTitleBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreQueryTitleBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  level: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

/** core/quote block */
export type WpCoreQuoteBlock = WpBlock & {
  __typename?: 'WpCoreQuoteBlock';
  attributes?: Maybe<WpCoreQuoteBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreQuoteBlockAttributes = {
  __typename?: 'WpCoreQuoteBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockAttributesUnion = WpCoreQuoteBlockAttributes | WpCoreQuoteBlockDeprecatedV1Attributes | WpCoreQuoteBlockDeprecatedV2Attributes | WpCoreQuoteBlockDeprecatedV3Attributes;

export type WpCoreQuoteBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreQuoteBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreQuoteBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  value: Scalars['String'];
};

export type WpCoreQuoteBlockDeprecatedV3Attributes = {
  __typename?: 'WpCoreQuoteBlockDeprecatedV3Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  citation: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  value: Scalars['String'];
};

/** core/rss block */
export type WpCoreRssBlock = WpBlock & {
  __typename?: 'WpCoreRssBlock';
  attributes?: Maybe<WpCoreRssBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreRssBlockAttributes = {
  __typename?: 'WpCoreRssBlockAttributes';
  align?: Maybe<Scalars['String']>;
  blockLayout: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  displayAuthor: Scalars['Boolean'];
  displayDate: Scalars['Boolean'];
  displayExcerpt: Scalars['Boolean'];
  excerptLength: Scalars['Float'];
  feedURL: Scalars['String'];
  itemsToShow: Scalars['Float'];
  lock?: Maybe<Scalars['JSON']>;
};

/** core/search block */
export type WpCoreSearchBlock = WpBlock & {
  __typename?: 'WpCoreSearchBlock';
  attributes?: Maybe<WpCoreSearchBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSearchBlockAttributes = {
  __typename?: 'WpCoreSearchBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  borderColor?: Maybe<Scalars['String']>;
  buttonPosition: Scalars['String'];
  buttonText?: Maybe<Scalars['String']>;
  buttonUseIcon: Scalars['Boolean'];
  className?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  placeholder: Scalars['String'];
  showLabel: Scalars['Boolean'];
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Float']>;
  widthUnit?: Maybe<Scalars['String']>;
};

/** core/separator block */
export type WpCoreSeparatorBlock = WpBlock & {
  __typename?: 'WpCoreSeparatorBlock';
  attributes?: Maybe<WpCoreSeparatorBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSeparatorBlockAttributes = {
  __typename?: 'WpCoreSeparatorBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  color?: Maybe<Scalars['String']>;
  customColor?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** core/shortcode block */
export type WpCoreShortcodeBlock = WpBlock & {
  __typename?: 'WpCoreShortcodeBlock';
  attributes?: Maybe<WpCoreShortcodeBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreShortcodeBlockAttributes = {
  __typename?: 'WpCoreShortcodeBlockAttributes';
  lock?: Maybe<Scalars['JSON']>;
  text?: Maybe<Scalars['String']>;
};

/** core/site-logo block */
export type WpCoreSiteLogoBlock = WpBlock & {
  __typename?: 'WpCoreSiteLogoBlock';
  attributes?: Maybe<WpCoreSiteLogoBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSiteLogoBlockAttributes = {
  __typename?: 'WpCoreSiteLogoBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  linkTarget: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  shouldSyncIcon?: Maybe<Scalars['Boolean']>;
  style?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['Float']>;
};

/** core/site-tagline block */
export type WpCoreSiteTaglineBlock = WpBlock & {
  __typename?: 'WpCoreSiteTaglineBlock';
  attributes?: Maybe<WpCoreSiteTaglineBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSiteTaglineBlockAttributes = {
  __typename?: 'WpCoreSiteTaglineBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreSiteTaglineBlockAttributesUnion = WpCoreSiteTaglineBlockAttributes | WpCoreSiteTaglineBlockDeprecatedV1Attributes;

export type WpCoreSiteTaglineBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreSiteTaglineBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/site-title block */
export type WpCoreSiteTitleBlock = WpBlock & {
  __typename?: 'WpCoreSiteTitleBlock';
  attributes?: Maybe<WpCoreSiteTitleBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSiteTitleBlockAttributes = {
  __typename?: 'WpCoreSiteTitleBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  level: Scalars['Float'];
  linkTarget: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreSiteTitleBlockAttributesUnion = WpCoreSiteTitleBlockAttributes | WpCoreSiteTitleBlockDeprecatedV1Attributes;

export type WpCoreSiteTitleBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreSiteTitleBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  isLink: Scalars['Boolean'];
  level: Scalars['Float'];
  linkTarget: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/social-link block */
export type WpCoreSocialLinkBlock = WpBlock & {
  __typename?: 'WpCoreSocialLinkBlock';
  attributes?: Maybe<WpCoreSocialLinkBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSocialLinkBlockAttributes = {
  __typename?: 'WpCoreSocialLinkBlockAttributes';
  className?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  service?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

/** core/social-links block */
export type WpCoreSocialLinksBlock = WpBlock & {
  __typename?: 'WpCoreSocialLinksBlock';
  attributes?: Maybe<WpCoreSocialLinksBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSocialLinksBlockAttributes = {
  __typename?: 'WpCoreSocialLinksBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customIconBackgroundColor?: Maybe<Scalars['String']>;
  customIconColor?: Maybe<Scalars['String']>;
  iconBackgroundColor?: Maybe<Scalars['String']>;
  iconBackgroundColorValue?: Maybe<Scalars['String']>;
  iconColor?: Maybe<Scalars['String']>;
  iconColorValue?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openInNewTab: Scalars['Boolean'];
  size?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
};

export type WpCoreSocialLinksBlockAttributesUnion = WpCoreSocialLinksBlockAttributes | WpCoreSocialLinksBlockDeprecatedV1Attributes;

export type WpCoreSocialLinksBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreSocialLinksBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  customIconBackgroundColor?: Maybe<Scalars['String']>;
  customIconColor?: Maybe<Scalars['String']>;
  iconBackgroundColor?: Maybe<Scalars['String']>;
  iconBackgroundColorValue?: Maybe<Scalars['String']>;
  iconColor?: Maybe<Scalars['String']>;
  iconColorValue?: Maybe<Scalars['String']>;
  layout?: Maybe<Scalars['JSON']>;
  lock?: Maybe<Scalars['JSON']>;
  openInNewTab: Scalars['Boolean'];
  size?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['JSON']>;
};

/** core/spacer block */
export type WpCoreSpacerBlock = WpBlock & {
  __typename?: 'WpCoreSpacerBlock';
  attributes?: Maybe<WpCoreSpacerBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreSpacerBlockAttributes = {
  __typename?: 'WpCoreSpacerBlockAttributes';
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['String']>;
};

export type WpCoreSpacerBlockAttributesUnion = WpCoreSpacerBlockAttributes | WpCoreSpacerBlockDeprecatedV1Attributes;

export type WpCoreSpacerBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreSpacerBlockDeprecatedV1Attributes';
  anchor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  height: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['String']>;
};

/** core/table block */
export type WpCoreTableBlock = WpBlock & {
  __typename?: 'WpCoreTableBlock';
  attributes?: Maybe<WpCoreTableBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTableBlockAttributes = {
  __typename?: 'WpCoreTableBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  body: Array<Maybe<WpCoreTableBlockAttributesBody>>;
  borderColor?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  foot: Array<Maybe<WpCoreTableBlockAttributesFoot>>;
  gradient?: Maybe<Scalars['String']>;
  hasFixedLayout: Scalars['Boolean'];
  head: Array<Maybe<WpCoreTableBlockAttributesHead>>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreTableBlockAttributesBody = {
  __typename?: 'WpCoreTableBlockAttributesBody';
  cells: Array<Maybe<WpCoreTableBlockAttributesBodyCells>>;
};

export type WpCoreTableBlockAttributesBodyCells = {
  __typename?: 'WpCoreTableBlockAttributesBodyCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesFoot = {
  __typename?: 'WpCoreTableBlockAttributesFoot';
  cells: Array<Maybe<WpCoreTableBlockAttributesFootCells>>;
};

export type WpCoreTableBlockAttributesFootCells = {
  __typename?: 'WpCoreTableBlockAttributesFootCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesHead = {
  __typename?: 'WpCoreTableBlockAttributesHead';
  cells: Array<Maybe<WpCoreTableBlockAttributesHeadCells>>;
};

export type WpCoreTableBlockAttributesHeadCells = {
  __typename?: 'WpCoreTableBlockAttributesHeadCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockAttributesUnion = WpCoreTableBlockAttributes | WpCoreTableBlockDeprecatedV1Attributes | WpCoreTableBlockDeprecatedV2Attributes;

export type WpCoreTableBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreTableBlockDeprecatedV1Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  body: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesBody>>;
  borderColor?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  foot: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesFoot>>;
  gradient?: Maybe<Scalars['String']>;
  hasFixedLayout: Scalars['Boolean'];
  head: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesHead>>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreTableBlockDeprecatedV1AttributesBody = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesBody';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesBodyCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesBodyCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesBodyCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV1AttributesFoot = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesFoot';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesFootCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesFootCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesFootCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV1AttributesHead = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesHead';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV1AttributesHeadCells>>;
};

export type WpCoreTableBlockDeprecatedV1AttributesHeadCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV1AttributesHeadCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreTableBlockDeprecatedV2Attributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  body: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesBody>>;
  borderColor?: Maybe<Scalars['String']>;
  caption: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  foot: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesFoot>>;
  gradient?: Maybe<Scalars['String']>;
  hasFixedLayout: Scalars['Boolean'];
  head: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesHead>>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreTableBlockDeprecatedV2AttributesBody = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesBody';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesBodyCells>>;
};

export type WpCoreTableBlockDeprecatedV2AttributesBodyCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesBodyCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV2AttributesFoot = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesFoot';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesFootCells>>;
};

export type WpCoreTableBlockDeprecatedV2AttributesFootCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesFootCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

export type WpCoreTableBlockDeprecatedV2AttributesHead = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesHead';
  cells: Array<Maybe<WpCoreTableBlockDeprecatedV2AttributesHeadCells>>;
};

export type WpCoreTableBlockDeprecatedV2AttributesHeadCells = {
  __typename?: 'WpCoreTableBlockDeprecatedV2AttributesHeadCells';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  tag: Scalars['String'];
};

/** core/tag-cloud block */
export type WpCoreTagCloudBlock = WpBlock & {
  __typename?: 'WpCoreTagCloudBlock';
  attributes?: Maybe<WpCoreTagCloudBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTagCloudBlockAttributes = {
  __typename?: 'WpCoreTagCloudBlockAttributes';
  align?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  numberOfTags: Scalars['Float'];
  showTagCounts: Scalars['Boolean'];
  taxonomy: Scalars['String'];
};

/** core/template-part block */
export type WpCoreTemplatePartBlock = WpBlock & {
  __typename?: 'WpCoreTemplatePartBlock';
  attributes?: Maybe<WpCoreTemplatePartBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTemplatePartBlockAttributes = {
  __typename?: 'WpCoreTemplatePartBlockAttributes';
  align?: Maybe<Scalars['String']>;
  area?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  slug?: Maybe<Scalars['String']>;
  tagName?: Maybe<Scalars['String']>;
  theme?: Maybe<Scalars['String']>;
};

/** core/term-description block */
export type WpCoreTermDescriptionBlock = WpBlock & {
  __typename?: 'WpCoreTermDescriptionBlock';
  attributes?: Maybe<WpCoreTermDescriptionBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTermDescriptionBlockAttributes = {
  __typename?: 'WpCoreTermDescriptionBlockAttributes';
  align?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/text-columns block */
export type WpCoreTextColumnsBlock = WpBlock & {
  __typename?: 'WpCoreTextColumnsBlock';
  attributes?: Maybe<WpCoreTextColumnsBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreTextColumnsBlockAttributes = {
  __typename?: 'WpCoreTextColumnsBlockAttributes';
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  content: Array<Maybe<WpCoreTextColumnsBlockAttributesContent>>;
  lock?: Maybe<Scalars['JSON']>;
  width?: Maybe<Scalars['String']>;
};

export type WpCoreTextColumnsBlockAttributesContent = {
  __typename?: 'WpCoreTextColumnsBlockAttributesContent';
  wpChildren?: Maybe<Scalars['String']>;
};

/** core/verse block */
export type WpCoreVerseBlock = WpBlock & {
  __typename?: 'WpCoreVerseBlock';
  attributes?: Maybe<WpCoreVerseBlockAttributesUnion>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreVerseBlockAttributes = {
  __typename?: 'WpCoreVerseBlockAttributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreVerseBlockAttributesUnion = WpCoreVerseBlockAttributes | WpCoreVerseBlockDeprecatedV1Attributes | WpCoreVerseBlockDeprecatedV2Attributes;

export type WpCoreVerseBlockDeprecatedV1Attributes = {
  __typename?: 'WpCoreVerseBlockDeprecatedV1Attributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

export type WpCoreVerseBlockDeprecatedV2Attributes = {
  __typename?: 'WpCoreVerseBlockDeprecatedV2Attributes';
  anchor?: Maybe<Scalars['String']>;
  backgroundColor?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  content: Scalars['String'];
  fontFamily?: Maybe<Scalars['String']>;
  fontSize?: Maybe<Scalars['String']>;
  gradient?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
  style?: Maybe<Scalars['JSON']>;
  textAlign?: Maybe<Scalars['String']>;
  textColor?: Maybe<Scalars['String']>;
};

/** core/video block */
export type WpCoreVideoBlock = WpBlock & {
  __typename?: 'WpCoreVideoBlock';
  attributes?: Maybe<WpCoreVideoBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpCoreVideoBlockAttributes = {
  __typename?: 'WpCoreVideoBlockAttributes';
  align?: Maybe<Scalars['String']>;
  anchor?: Maybe<Scalars['String']>;
  autoplay?: Maybe<Scalars['Boolean']>;
  caption?: Maybe<Scalars['String']>;
  className?: Maybe<Scalars['String']>;
  controls: Scalars['Boolean'];
  id?: Maybe<Scalars['Float']>;
  lock?: Maybe<Scalars['JSON']>;
  loop?: Maybe<Scalars['Boolean']>;
  muted?: Maybe<Scalars['Boolean']>;
  playsInline?: Maybe<Scalars['Boolean']>;
  poster?: Maybe<Scalars['String']>;
  preload: Scalars['String'];
  src?: Maybe<Scalars['String']>;
  tracks: Array<Maybe<WpBlockAttributesObject>>;
};

export type WpDatabaseIdentifier = {
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
};

/** The template assigned to the node */
export type WpDefaultTemplate = WpContentTemplate & {
  __typename?: 'WpDefaultTemplate';
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>;
};

/** The discussion setting type */
export type WpDiscussionSettings = {
  __typename?: 'WpDiscussionSettings';
  /** Erlaube Besuchern, neue Beiträge zu kommentieren. */
  defaultCommentStatus?: Maybe<Scalars['String']>;
  /** Link-Benachrichtigungen von anderen Blogs (Pingbacks und Trackbacks) zu neuen Beiträgen erlauben. */
  defaultPingStatus?: Maybe<Scalars['String']>;
};

export type WpDiscussionSettingsFilterInput = {
  defaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  defaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
};

export type WpEdge = {
  __typename?: 'WpEdge';
  next?: Maybe<Wp>;
  node: Wp;
  previous?: Maybe<Wp>;
};

export enum WpFieldsEnum {
  AllSettingsDiscussionSettingsDefaultCommentStatus = 'allSettings___discussionSettingsDefaultCommentStatus',
  AllSettingsDiscussionSettingsDefaultPingStatus = 'allSettings___discussionSettingsDefaultPingStatus',
  AllSettingsGeneralSettingsDateFormat = 'allSettings___generalSettingsDateFormat',
  AllSettingsGeneralSettingsDescription = 'allSettings___generalSettingsDescription',
  AllSettingsGeneralSettingsEmail = 'allSettings___generalSettingsEmail',
  AllSettingsGeneralSettingsLanguage = 'allSettings___generalSettingsLanguage',
  AllSettingsGeneralSettingsStartOfWeek = 'allSettings___generalSettingsStartOfWeek',
  AllSettingsGeneralSettingsTimeFormat = 'allSettings___generalSettingsTimeFormat',
  AllSettingsGeneralSettingsTimezone = 'allSettings___generalSettingsTimezone',
  AllSettingsGeneralSettingsTitle = 'allSettings___generalSettingsTitle',
  AllSettingsGeneralSettingsUrl = 'allSettings___generalSettingsUrl',
  AllSettingsReadingSettingsPostsPerPage = 'allSettings___readingSettingsPostsPerPage',
  AllSettingsWritingSettingsDefaultCategory = 'allSettings___writingSettingsDefaultCategory',
  AllSettingsWritingSettingsDefaultPostFormat = 'allSettings___writingSettingsDefaultPostFormat',
  AllSettingsWritingSettingsUseSmilies = 'allSettings___writingSettingsUseSmilies',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DiscussionSettingsDefaultCommentStatus = 'discussionSettings___defaultCommentStatus',
  DiscussionSettingsDefaultPingStatus = 'discussionSettings___defaultPingStatus',
  GeneralSettingsDateFormat = 'generalSettings___dateFormat',
  GeneralSettingsDescription = 'generalSettings___description',
  GeneralSettingsEmail = 'generalSettings___email',
  GeneralSettingsLanguage = 'generalSettings___language',
  GeneralSettingsStartOfWeek = 'generalSettings___startOfWeek',
  GeneralSettingsTimeFormat = 'generalSettings___timeFormat',
  GeneralSettingsTimezone = 'generalSettings___timezone',
  GeneralSettingsTitle = 'generalSettings___title',
  GeneralSettingsUrl = 'generalSettings___url',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  ReadingSettingsPostsPerPage = 'readingSettings___postsPerPage',
  WpGatsbyArePrettyPermalinksEnabled = 'wpGatsby___arePrettyPermalinksEnabled',
  WpGatsbyIsPreviewFrontendOnline = 'wpGatsby___isPreviewFrontendOnline',
  WritingSettingsDefaultCategory = 'writingSettings___defaultCategory',
  WritingSettingsDefaultPostFormat = 'writingSettings___defaultPostFormat',
  WritingSettingsUseSmilies = 'writingSettings___useSmilies'
}

export type WpFilterInput = {
  allSettings?: InputMaybe<WpSettingsFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  discussionSettings?: InputMaybe<WpDiscussionSettingsFilterInput>;
  generalSettings?: InputMaybe<WpGeneralSettingsFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  readingSettings?: InputMaybe<WpReadingSettingsFilterInput>;
  wpGatsby?: InputMaybe<WpWpGatsbyFilterInput>;
  writingSettings?: InputMaybe<WpWritingSettingsFilterInput>;
};

/** The general setting type */
export type WpGeneralSettings = {
  __typename?: 'WpGeneralSettings';
  /** Ein Zeitformat für alle datumsbasierten Zeichenfolgen. */
  dateFormat?: Maybe<Scalars['String']>;
  /** Website-Untertitel. */
  description?: Maybe<Scalars['String']>;
  /** Diese Adresse wird für administrative Zwecke verwendet, wie Benachrichtigungen über neue Benutzer. */
  email?: Maybe<Scalars['String']>;
  /** WordPress-Ländercode. */
  language?: Maybe<Scalars['String']>;
  /** Die Zahl eines Wochentages, mit dem die Woche beginnen sollte. */
  startOfWeek?: Maybe<Scalars['Int']>;
  /** Ein Zeitformat für alle zeitbasierten Zeichenfolgen. */
  timeFormat?: Maybe<Scalars['String']>;
  /** Eine Stadt in deiner Zeitzone. */
  timezone?: Maybe<Scalars['String']>;
  /** Website-Titel. */
  title?: Maybe<Scalars['String']>;
  /** Website-URL. */
  url?: Maybe<Scalars['String']>;
};

export type WpGeneralSettingsFilterInput = {
  dateFormat?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  language?: InputMaybe<StringQueryOperatorInput>;
  startOfWeek?: InputMaybe<IntQueryOperatorInput>;
  timeFormat?: InputMaybe<StringQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpGroupConnection = {
  __typename?: 'WpGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Wp>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpGroupConnectionDistinctArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionGroupArgs = {
  field: WpFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpGroupConnectionMaxArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionMinArgs = {
  field: WpFieldsEnum;
};


export type WpGroupConnectionSumArgs = {
  field: WpFieldsEnum;
};

export type WpHierarchicalContentNode = {
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeAncestorsConnection = {
  __typename?: 'WpHierarchicalContentNodeToContentNodeAncestorsConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToContentNodeChildrenConnection = {
  __typename?: 'WpHierarchicalContentNodeToContentNodeChildrenConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the HierarchicalContentNode type and the ContentNode type */
export type WpHierarchicalContentNodeToParentContentNodeConnectionEdge = {
  __typename?: 'WpHierarchicalContentNodeToParentContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput = {
  node?: InputMaybe<WpContentNodeFilterInput>;
};

export type WpHierarchicalTermNode = {
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
};

/** lazyblock-core/free block */
export type WpLazyblockCoreFreeBlock = WpBlock & {
  __typename?: 'WpLazyblockCoreFreeBlock';
  attributes?: Maybe<WpLazyblockCoreFreeBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockCoreFreeBlockAttributes = {
  __typename?: 'WpLazyblockCoreFreeBlockAttributes';
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** lazyblock/image-repeater block */
export type WpLazyblockImageRepeaterBlock = WpBlock & {
  __typename?: 'WpLazyblockImageRepeaterBlock';
  attributes?: Maybe<WpLazyblockImageRepeaterBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockImageRepeaterBlockAttributes = {
  __typename?: 'WpLazyblockImageRepeaterBlockAttributes';
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  images: Scalars['String'];
  innerBlock: Scalars['String'];
  lazyblock: Scalars['JSON'];
  lock?: Maybe<Scalars['JSON']>;
};

/** lazyblock/lightbox-image block */
export type WpLazyblockLightboxImageBlock = WpBlock & {
  __typename?: 'WpLazyblockLightboxImageBlock';
  attributes?: Maybe<WpLazyblockLightboxImageBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockLightboxImageBlockAttributes = {
  __typename?: 'WpLazyblockLightboxImageBlockAttributes';
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  image: Scalars['String'];
  lazyblock: Scalars['JSON'];
  lock?: Maybe<Scalars['JSON']>;
};

/** lazyblock/project-highlight block */
export type WpLazyblockProjectHighlightBlock = WpBlock & {
  __typename?: 'WpLazyblockProjectHighlightBlock';
  attributes?: Maybe<WpLazyblockProjectHighlightBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockProjectHighlightBlockAttributes = {
  __typename?: 'WpLazyblockProjectHighlightBlockAttributes';
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  highlights: Scalars['String'];
  images: Scalars['String'];
  lazyblock: Scalars['JSON'];
  lock?: Maybe<Scalars['JSON']>;
  title: Scalars['String'];
};

/** lazyblock/projectecho block */
export type WpLazyblockProjectechoBlock = WpBlock & {
  __typename?: 'WpLazyblockProjectechoBlock';
  attributes?: Maybe<WpLazyblockProjectechoBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpLazyblockProjectechoBlockAttributes = {
  __typename?: 'WpLazyblockProjectechoBlockAttributes';
  align: Scalars['String'];
  anchor: Scalars['String'];
  blockId: Scalars['String'];
  blockUniqueClass: Scalars['String'];
  className?: Maybe<Scalars['String']>;
  gallery: Scalars['String'];
  ghostkitSR: Scalars['String'];
  ghostkitSpacings: Scalars['JSON'];
  lazyblock: Scalars['JSON'];
  lock?: Maybe<Scalars['JSON']>;
};

/** File details for a Media Item */
export type WpMediaDetails = {
  __typename?: 'WpMediaDetails';
  /** The filename of the mediaItem */
  file?: Maybe<Scalars['String']>;
  /** The height of the mediaItem */
  height?: Maybe<Scalars['Int']>;
  /** Meta information associated with the mediaItem */
  meta?: Maybe<WpMediaItemMeta>;
  /** The available sizes of the mediaItem */
  sizes?: Maybe<Array<Maybe<WpMediaSize>>>;
  /** The width of the mediaItem */
  width?: Maybe<Scalars['Int']>;
};

export type WpMediaDetailsFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  meta?: InputMaybe<WpMediaItemMetaFilterInput>;
  sizes?: InputMaybe<WpMediaSizeFilterListInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
};

/** The mediaItem type */
export type WpMediaItem = Node & RemoteFile & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpMediaItem';
  /** Alternative text to display when resource is not displayed */
  altText?: Maybe<Scalars['String']>;
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** The caption for the resource */
  caption?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the mediaItem type and the Comment type */
  comments?: Maybe<WpMediaItemToCommentConnection>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** Description of the image (stored as post_content) */
  description?: Maybe<Scalars['String']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The filesize in bytes of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  filename: Scalars['String'];
  filesize?: Maybe<Scalars['Int']>;
  /** Data used in the <GatsbyImage /> component. See https://gatsby.dev/img for more info. */
  gatsbyImage?: Maybe<Scalars['JSON']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  localFile?: Maybe<File>;
  /** Details about the mediaItem */
  mediaDetails?: Maybe<WpMediaDetails>;
  /** Url of the mediaItem */
  mediaItemUrl?: Maybe<Scalars['String']>;
  /** Type of resource */
  mediaType?: Maybe<Scalars['String']>;
  mimeType: Scalars['String'];
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  publicUrl: Scalars['String'];
  /** @deprecated MediaItem.remoteFile was renamed to localFile */
  remoteFile?: Maybe<File>;
  resize?: Maybe<RemoteFileResize>;
  /** The sizes attribute value for an image. */
  sizes?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** Url of the mediaItem */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
  srcSet?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
};


/** The mediaItem type */
export type WpMediaItemDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemGatsbyImageArgs = {
  aspectRatio?: InputMaybe<Scalars['Float']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  formats?: InputMaybe<Array<RemoteFileFormat>>;
  height?: InputMaybe<Scalars['Int']>;
  layout?: InputMaybe<RemoteFileLayout>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  placeholder?: InputMaybe<RemoteFilePlaceholder>;
  quality?: InputMaybe<Scalars['Int']>;
  sizes?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The mediaItem type */
export type WpMediaItemResizeArgs = {
  cropFocus?: InputMaybe<Array<InputMaybe<RemoteFileCropFocus>>>;
  fit?: InputMaybe<RemoteFileFit>;
  format?: InputMaybe<RemoteFileFormat>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type WpMediaItemConnection = {
  __typename?: 'WpMediaItemConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMediaItemEdge>;
  group: Array<WpMediaItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMediaItemConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionGroupArgs = {
  field: WpMediaItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMediaItemConnectionMaxArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionMinArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemConnectionSumArgs = {
  field: WpMediaItemFieldsEnum;
};

export type WpMediaItemEdge = {
  __typename?: 'WpMediaItemEdge';
  next?: Maybe<WpMediaItem>;
  node: WpMediaItem;
  previous?: Maybe<WpMediaItem>;
};

export enum WpMediaItemFieldsEnum {
  AltText = 'altText',
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesChildren = 'ancestors___nodes___children',
  AncestorsNodesChildrenChildren = 'ancestors___nodes___children___children',
  AncestorsNodesChildrenId = 'ancestors___nodes___children___id',
  AncestorsNodesContentTypeName = 'ancestors___nodes___contentTypeName',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDate = 'ancestors___nodes___date',
  AncestorsNodesDateGmt = 'ancestors___nodes___dateGmt',
  AncestorsNodesDesiredSlug = 'ancestors___nodes___desiredSlug',
  AncestorsNodesEnclosure = 'ancestors___nodes___enclosure',
  AncestorsNodesGuid = 'ancestors___nodes___guid',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesInternalContent = 'ancestors___nodes___internal___content',
  AncestorsNodesInternalContentDigest = 'ancestors___nodes___internal___contentDigest',
  AncestorsNodesInternalDescription = 'ancestors___nodes___internal___description',
  AncestorsNodesInternalFieldOwners = 'ancestors___nodes___internal___fieldOwners',
  AncestorsNodesInternalIgnoreType = 'ancestors___nodes___internal___ignoreType',
  AncestorsNodesInternalMediaType = 'ancestors___nodes___internal___mediaType',
  AncestorsNodesInternalOwner = 'ancestors___nodes___internal___owner',
  AncestorsNodesInternalType = 'ancestors___nodes___internal___type',
  AncestorsNodesIsContentNode = 'ancestors___nodes___isContentNode',
  AncestorsNodesIsTermNode = 'ancestors___nodes___isTermNode',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesModified = 'ancestors___nodes___modified',
  AncestorsNodesModifiedGmt = 'ancestors___nodes___modifiedGmt',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AncestorsNodesParentChildren = 'ancestors___nodes___parent___children',
  AncestorsNodesParentId = 'ancestors___nodes___parent___id',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesStatus = 'ancestors___nodes___status',
  AncestorsNodesTemplateTemplateName = 'ancestors___nodes___template___templateName',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeBlockEditorPreviewsNodes = 'author___node___blockEditorPreviews___nodes',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorNodeIsContentNode = 'author___node___isContentNode',
  AuthorNodeIsTermNode = 'author___node___isTermNode',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  Caption = 'caption',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  Description = 'description',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  FileSize = 'fileSize',
  Filename = 'filename',
  Filesize = 'filesize',
  GatsbyImage = 'gatsbyImage',
  Guid = 'guid',
  Height = 'height',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  Link = 'link',
  LocalFileAbsolutePath = 'localFile___absolutePath',
  LocalFileAccessTime = 'localFile___accessTime',
  LocalFileAtime = 'localFile___atime',
  LocalFileAtimeMs = 'localFile___atimeMs',
  LocalFileBase = 'localFile___base',
  LocalFileBirthTime = 'localFile___birthTime',
  LocalFileBirthtime = 'localFile___birthtime',
  LocalFileBirthtimeMs = 'localFile___birthtimeMs',
  LocalFileBlksize = 'localFile___blksize',
  LocalFileBlocks = 'localFile___blocks',
  LocalFileChangeTime = 'localFile___changeTime',
  LocalFileChildImageSharpChildren = 'localFile___childImageSharp___children',
  LocalFileChildImageSharpChildrenChildren = 'localFile___childImageSharp___children___children',
  LocalFileChildImageSharpChildrenId = 'localFile___childImageSharp___children___id',
  LocalFileChildImageSharpFixedAspectRatio = 'localFile___childImageSharp___fixed___aspectRatio',
  LocalFileChildImageSharpFixedBase64 = 'localFile___childImageSharp___fixed___base64',
  LocalFileChildImageSharpFixedHeight = 'localFile___childImageSharp___fixed___height',
  LocalFileChildImageSharpFixedOriginalName = 'localFile___childImageSharp___fixed___originalName',
  LocalFileChildImageSharpFixedSrc = 'localFile___childImageSharp___fixed___src',
  LocalFileChildImageSharpFixedSrcSet = 'localFile___childImageSharp___fixed___srcSet',
  LocalFileChildImageSharpFixedSrcSetWebp = 'localFile___childImageSharp___fixed___srcSetWebp',
  LocalFileChildImageSharpFixedSrcWebp = 'localFile___childImageSharp___fixed___srcWebp',
  LocalFileChildImageSharpFixedTracedSvg = 'localFile___childImageSharp___fixed___tracedSVG',
  LocalFileChildImageSharpFixedWidth = 'localFile___childImageSharp___fixed___width',
  LocalFileChildImageSharpFluidAspectRatio = 'localFile___childImageSharp___fluid___aspectRatio',
  LocalFileChildImageSharpFluidBase64 = 'localFile___childImageSharp___fluid___base64',
  LocalFileChildImageSharpFluidOriginalImg = 'localFile___childImageSharp___fluid___originalImg',
  LocalFileChildImageSharpFluidOriginalName = 'localFile___childImageSharp___fluid___originalName',
  LocalFileChildImageSharpFluidPresentationHeight = 'localFile___childImageSharp___fluid___presentationHeight',
  LocalFileChildImageSharpFluidPresentationWidth = 'localFile___childImageSharp___fluid___presentationWidth',
  LocalFileChildImageSharpFluidSizes = 'localFile___childImageSharp___fluid___sizes',
  LocalFileChildImageSharpFluidSrc = 'localFile___childImageSharp___fluid___src',
  LocalFileChildImageSharpFluidSrcSet = 'localFile___childImageSharp___fluid___srcSet',
  LocalFileChildImageSharpFluidSrcSetWebp = 'localFile___childImageSharp___fluid___srcSetWebp',
  LocalFileChildImageSharpFluidSrcWebp = 'localFile___childImageSharp___fluid___srcWebp',
  LocalFileChildImageSharpFluidTracedSvg = 'localFile___childImageSharp___fluid___tracedSVG',
  LocalFileChildImageSharpGatsbyImageData = 'localFile___childImageSharp___gatsbyImageData',
  LocalFileChildImageSharpId = 'localFile___childImageSharp___id',
  LocalFileChildImageSharpInternalContent = 'localFile___childImageSharp___internal___content',
  LocalFileChildImageSharpInternalContentDigest = 'localFile___childImageSharp___internal___contentDigest',
  LocalFileChildImageSharpInternalDescription = 'localFile___childImageSharp___internal___description',
  LocalFileChildImageSharpInternalFieldOwners = 'localFile___childImageSharp___internal___fieldOwners',
  LocalFileChildImageSharpInternalIgnoreType = 'localFile___childImageSharp___internal___ignoreType',
  LocalFileChildImageSharpInternalMediaType = 'localFile___childImageSharp___internal___mediaType',
  LocalFileChildImageSharpInternalOwner = 'localFile___childImageSharp___internal___owner',
  LocalFileChildImageSharpInternalType = 'localFile___childImageSharp___internal___type',
  LocalFileChildImageSharpOriginalHeight = 'localFile___childImageSharp___original___height',
  LocalFileChildImageSharpOriginalSrc = 'localFile___childImageSharp___original___src',
  LocalFileChildImageSharpOriginalWidth = 'localFile___childImageSharp___original___width',
  LocalFileChildImageSharpParentChildren = 'localFile___childImageSharp___parent___children',
  LocalFileChildImageSharpParentId = 'localFile___childImageSharp___parent___id',
  LocalFileChildImageSharpResizeAspectRatio = 'localFile___childImageSharp___resize___aspectRatio',
  LocalFileChildImageSharpResizeHeight = 'localFile___childImageSharp___resize___height',
  LocalFileChildImageSharpResizeOriginalName = 'localFile___childImageSharp___resize___originalName',
  LocalFileChildImageSharpResizeSrc = 'localFile___childImageSharp___resize___src',
  LocalFileChildImageSharpResizeTracedSvg = 'localFile___childImageSharp___resize___tracedSVG',
  LocalFileChildImageSharpResizeWidth = 'localFile___childImageSharp___resize___width',
  LocalFileChildren = 'localFile___children',
  LocalFileChildrenImageSharp = 'localFile___childrenImageSharp',
  LocalFileChildrenImageSharpChildren = 'localFile___childrenImageSharp___children',
  LocalFileChildrenImageSharpChildrenChildren = 'localFile___childrenImageSharp___children___children',
  LocalFileChildrenImageSharpChildrenId = 'localFile___childrenImageSharp___children___id',
  LocalFileChildrenImageSharpFixedAspectRatio = 'localFile___childrenImageSharp___fixed___aspectRatio',
  LocalFileChildrenImageSharpFixedBase64 = 'localFile___childrenImageSharp___fixed___base64',
  LocalFileChildrenImageSharpFixedHeight = 'localFile___childrenImageSharp___fixed___height',
  LocalFileChildrenImageSharpFixedOriginalName = 'localFile___childrenImageSharp___fixed___originalName',
  LocalFileChildrenImageSharpFixedSrc = 'localFile___childrenImageSharp___fixed___src',
  LocalFileChildrenImageSharpFixedSrcSet = 'localFile___childrenImageSharp___fixed___srcSet',
  LocalFileChildrenImageSharpFixedSrcSetWebp = 'localFile___childrenImageSharp___fixed___srcSetWebp',
  LocalFileChildrenImageSharpFixedSrcWebp = 'localFile___childrenImageSharp___fixed___srcWebp',
  LocalFileChildrenImageSharpFixedTracedSvg = 'localFile___childrenImageSharp___fixed___tracedSVG',
  LocalFileChildrenImageSharpFixedWidth = 'localFile___childrenImageSharp___fixed___width',
  LocalFileChildrenImageSharpFluidAspectRatio = 'localFile___childrenImageSharp___fluid___aspectRatio',
  LocalFileChildrenImageSharpFluidBase64 = 'localFile___childrenImageSharp___fluid___base64',
  LocalFileChildrenImageSharpFluidOriginalImg = 'localFile___childrenImageSharp___fluid___originalImg',
  LocalFileChildrenImageSharpFluidOriginalName = 'localFile___childrenImageSharp___fluid___originalName',
  LocalFileChildrenImageSharpFluidPresentationHeight = 'localFile___childrenImageSharp___fluid___presentationHeight',
  LocalFileChildrenImageSharpFluidPresentationWidth = 'localFile___childrenImageSharp___fluid___presentationWidth',
  LocalFileChildrenImageSharpFluidSizes = 'localFile___childrenImageSharp___fluid___sizes',
  LocalFileChildrenImageSharpFluidSrc = 'localFile___childrenImageSharp___fluid___src',
  LocalFileChildrenImageSharpFluidSrcSet = 'localFile___childrenImageSharp___fluid___srcSet',
  LocalFileChildrenImageSharpFluidSrcSetWebp = 'localFile___childrenImageSharp___fluid___srcSetWebp',
  LocalFileChildrenImageSharpFluidSrcWebp = 'localFile___childrenImageSharp___fluid___srcWebp',
  LocalFileChildrenImageSharpFluidTracedSvg = 'localFile___childrenImageSharp___fluid___tracedSVG',
  LocalFileChildrenImageSharpGatsbyImageData = 'localFile___childrenImageSharp___gatsbyImageData',
  LocalFileChildrenImageSharpId = 'localFile___childrenImageSharp___id',
  LocalFileChildrenImageSharpInternalContent = 'localFile___childrenImageSharp___internal___content',
  LocalFileChildrenImageSharpInternalContentDigest = 'localFile___childrenImageSharp___internal___contentDigest',
  LocalFileChildrenImageSharpInternalDescription = 'localFile___childrenImageSharp___internal___description',
  LocalFileChildrenImageSharpInternalFieldOwners = 'localFile___childrenImageSharp___internal___fieldOwners',
  LocalFileChildrenImageSharpInternalIgnoreType = 'localFile___childrenImageSharp___internal___ignoreType',
  LocalFileChildrenImageSharpInternalMediaType = 'localFile___childrenImageSharp___internal___mediaType',
  LocalFileChildrenImageSharpInternalOwner = 'localFile___childrenImageSharp___internal___owner',
  LocalFileChildrenImageSharpInternalType = 'localFile___childrenImageSharp___internal___type',
  LocalFileChildrenImageSharpOriginalHeight = 'localFile___childrenImageSharp___original___height',
  LocalFileChildrenImageSharpOriginalSrc = 'localFile___childrenImageSharp___original___src',
  LocalFileChildrenImageSharpOriginalWidth = 'localFile___childrenImageSharp___original___width',
  LocalFileChildrenImageSharpParentChildren = 'localFile___childrenImageSharp___parent___children',
  LocalFileChildrenImageSharpParentId = 'localFile___childrenImageSharp___parent___id',
  LocalFileChildrenImageSharpResizeAspectRatio = 'localFile___childrenImageSharp___resize___aspectRatio',
  LocalFileChildrenImageSharpResizeHeight = 'localFile___childrenImageSharp___resize___height',
  LocalFileChildrenImageSharpResizeOriginalName = 'localFile___childrenImageSharp___resize___originalName',
  LocalFileChildrenImageSharpResizeSrc = 'localFile___childrenImageSharp___resize___src',
  LocalFileChildrenImageSharpResizeTracedSvg = 'localFile___childrenImageSharp___resize___tracedSVG',
  LocalFileChildrenImageSharpResizeWidth = 'localFile___childrenImageSharp___resize___width',
  LocalFileChildrenChildren = 'localFile___children___children',
  LocalFileChildrenChildrenChildren = 'localFile___children___children___children',
  LocalFileChildrenChildrenId = 'localFile___children___children___id',
  LocalFileChildrenId = 'localFile___children___id',
  LocalFileChildrenInternalContent = 'localFile___children___internal___content',
  LocalFileChildrenInternalContentDigest = 'localFile___children___internal___contentDigest',
  LocalFileChildrenInternalDescription = 'localFile___children___internal___description',
  LocalFileChildrenInternalFieldOwners = 'localFile___children___internal___fieldOwners',
  LocalFileChildrenInternalIgnoreType = 'localFile___children___internal___ignoreType',
  LocalFileChildrenInternalMediaType = 'localFile___children___internal___mediaType',
  LocalFileChildrenInternalOwner = 'localFile___children___internal___owner',
  LocalFileChildrenInternalType = 'localFile___children___internal___type',
  LocalFileChildrenParentChildren = 'localFile___children___parent___children',
  LocalFileChildrenParentId = 'localFile___children___parent___id',
  LocalFileCtime = 'localFile___ctime',
  LocalFileCtimeMs = 'localFile___ctimeMs',
  LocalFileDev = 'localFile___dev',
  LocalFileDir = 'localFile___dir',
  LocalFileExt = 'localFile___ext',
  LocalFileExtension = 'localFile___extension',
  LocalFileGid = 'localFile___gid',
  LocalFileHash = 'localFile___hash',
  LocalFileId = 'localFile___id',
  LocalFileIno = 'localFile___ino',
  LocalFileInternalContent = 'localFile___internal___content',
  LocalFileInternalContentDigest = 'localFile___internal___contentDigest',
  LocalFileInternalDescription = 'localFile___internal___description',
  LocalFileInternalFieldOwners = 'localFile___internal___fieldOwners',
  LocalFileInternalIgnoreType = 'localFile___internal___ignoreType',
  LocalFileInternalMediaType = 'localFile___internal___mediaType',
  LocalFileInternalOwner = 'localFile___internal___owner',
  LocalFileInternalType = 'localFile___internal___type',
  LocalFileMode = 'localFile___mode',
  LocalFileModifiedTime = 'localFile___modifiedTime',
  LocalFileMtime = 'localFile___mtime',
  LocalFileMtimeMs = 'localFile___mtimeMs',
  LocalFileName = 'localFile___name',
  LocalFileNlink = 'localFile___nlink',
  LocalFileParentChildren = 'localFile___parent___children',
  LocalFileParentChildrenChildren = 'localFile___parent___children___children',
  LocalFileParentChildrenId = 'localFile___parent___children___id',
  LocalFileParentId = 'localFile___parent___id',
  LocalFileParentInternalContent = 'localFile___parent___internal___content',
  LocalFileParentInternalContentDigest = 'localFile___parent___internal___contentDigest',
  LocalFileParentInternalDescription = 'localFile___parent___internal___description',
  LocalFileParentInternalFieldOwners = 'localFile___parent___internal___fieldOwners',
  LocalFileParentInternalIgnoreType = 'localFile___parent___internal___ignoreType',
  LocalFileParentInternalMediaType = 'localFile___parent___internal___mediaType',
  LocalFileParentInternalOwner = 'localFile___parent___internal___owner',
  LocalFileParentInternalType = 'localFile___parent___internal___type',
  LocalFileParentParentChildren = 'localFile___parent___parent___children',
  LocalFileParentParentId = 'localFile___parent___parent___id',
  LocalFilePrettySize = 'localFile___prettySize',
  LocalFilePublicUrl = 'localFile___publicURL',
  LocalFileRdev = 'localFile___rdev',
  LocalFileRelativeDirectory = 'localFile___relativeDirectory',
  LocalFileRelativePath = 'localFile___relativePath',
  LocalFileRoot = 'localFile___root',
  LocalFileSize = 'localFile___size',
  LocalFileSourceInstanceName = 'localFile___sourceInstanceName',
  LocalFileUid = 'localFile___uid',
  MediaDetailsFile = 'mediaDetails___file',
  MediaDetailsHeight = 'mediaDetails___height',
  MediaDetailsMetaAperture = 'mediaDetails___meta___aperture',
  MediaDetailsMetaCamera = 'mediaDetails___meta___camera',
  MediaDetailsMetaCaption = 'mediaDetails___meta___caption',
  MediaDetailsMetaCopyright = 'mediaDetails___meta___copyright',
  MediaDetailsMetaCreatedTimestamp = 'mediaDetails___meta___createdTimestamp',
  MediaDetailsMetaCredit = 'mediaDetails___meta___credit',
  MediaDetailsMetaFocalLength = 'mediaDetails___meta___focalLength',
  MediaDetailsMetaIso = 'mediaDetails___meta___iso',
  MediaDetailsMetaKeywords = 'mediaDetails___meta___keywords',
  MediaDetailsMetaOrientation = 'mediaDetails___meta___orientation',
  MediaDetailsMetaShutterSpeed = 'mediaDetails___meta___shutterSpeed',
  MediaDetailsMetaTitle = 'mediaDetails___meta___title',
  MediaDetailsSizes = 'mediaDetails___sizes',
  MediaDetailsSizesFile = 'mediaDetails___sizes___file',
  MediaDetailsSizesFileSize = 'mediaDetails___sizes___fileSize',
  MediaDetailsSizesHeight = 'mediaDetails___sizes___height',
  MediaDetailsSizesMimeType = 'mediaDetails___sizes___mimeType',
  MediaDetailsSizesName = 'mediaDetails___sizes___name',
  MediaDetailsSizesSourceUrl = 'mediaDetails___sizes___sourceUrl',
  MediaDetailsSizesWidth = 'mediaDetails___sizes___width',
  MediaDetailsWidth = 'mediaDetails___width',
  MediaItemUrl = 'mediaItemUrl',
  MediaType = 'mediaType',
  MimeType = 'mimeType',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PublicUrl = 'publicUrl',
  RemoteFileAbsolutePath = 'remoteFile___absolutePath',
  RemoteFileAccessTime = 'remoteFile___accessTime',
  RemoteFileAtime = 'remoteFile___atime',
  RemoteFileAtimeMs = 'remoteFile___atimeMs',
  RemoteFileBase = 'remoteFile___base',
  RemoteFileBirthTime = 'remoteFile___birthTime',
  RemoteFileBirthtime = 'remoteFile___birthtime',
  RemoteFileBirthtimeMs = 'remoteFile___birthtimeMs',
  RemoteFileBlksize = 'remoteFile___blksize',
  RemoteFileBlocks = 'remoteFile___blocks',
  RemoteFileChangeTime = 'remoteFile___changeTime',
  RemoteFileChildImageSharpChildren = 'remoteFile___childImageSharp___children',
  RemoteFileChildImageSharpChildrenChildren = 'remoteFile___childImageSharp___children___children',
  RemoteFileChildImageSharpChildrenId = 'remoteFile___childImageSharp___children___id',
  RemoteFileChildImageSharpFixedAspectRatio = 'remoteFile___childImageSharp___fixed___aspectRatio',
  RemoteFileChildImageSharpFixedBase64 = 'remoteFile___childImageSharp___fixed___base64',
  RemoteFileChildImageSharpFixedHeight = 'remoteFile___childImageSharp___fixed___height',
  RemoteFileChildImageSharpFixedOriginalName = 'remoteFile___childImageSharp___fixed___originalName',
  RemoteFileChildImageSharpFixedSrc = 'remoteFile___childImageSharp___fixed___src',
  RemoteFileChildImageSharpFixedSrcSet = 'remoteFile___childImageSharp___fixed___srcSet',
  RemoteFileChildImageSharpFixedSrcSetWebp = 'remoteFile___childImageSharp___fixed___srcSetWebp',
  RemoteFileChildImageSharpFixedSrcWebp = 'remoteFile___childImageSharp___fixed___srcWebp',
  RemoteFileChildImageSharpFixedTracedSvg = 'remoteFile___childImageSharp___fixed___tracedSVG',
  RemoteFileChildImageSharpFixedWidth = 'remoteFile___childImageSharp___fixed___width',
  RemoteFileChildImageSharpFluidAspectRatio = 'remoteFile___childImageSharp___fluid___aspectRatio',
  RemoteFileChildImageSharpFluidBase64 = 'remoteFile___childImageSharp___fluid___base64',
  RemoteFileChildImageSharpFluidOriginalImg = 'remoteFile___childImageSharp___fluid___originalImg',
  RemoteFileChildImageSharpFluidOriginalName = 'remoteFile___childImageSharp___fluid___originalName',
  RemoteFileChildImageSharpFluidPresentationHeight = 'remoteFile___childImageSharp___fluid___presentationHeight',
  RemoteFileChildImageSharpFluidPresentationWidth = 'remoteFile___childImageSharp___fluid___presentationWidth',
  RemoteFileChildImageSharpFluidSizes = 'remoteFile___childImageSharp___fluid___sizes',
  RemoteFileChildImageSharpFluidSrc = 'remoteFile___childImageSharp___fluid___src',
  RemoteFileChildImageSharpFluidSrcSet = 'remoteFile___childImageSharp___fluid___srcSet',
  RemoteFileChildImageSharpFluidSrcSetWebp = 'remoteFile___childImageSharp___fluid___srcSetWebp',
  RemoteFileChildImageSharpFluidSrcWebp = 'remoteFile___childImageSharp___fluid___srcWebp',
  RemoteFileChildImageSharpFluidTracedSvg = 'remoteFile___childImageSharp___fluid___tracedSVG',
  RemoteFileChildImageSharpGatsbyImageData = 'remoteFile___childImageSharp___gatsbyImageData',
  RemoteFileChildImageSharpId = 'remoteFile___childImageSharp___id',
  RemoteFileChildImageSharpInternalContent = 'remoteFile___childImageSharp___internal___content',
  RemoteFileChildImageSharpInternalContentDigest = 'remoteFile___childImageSharp___internal___contentDigest',
  RemoteFileChildImageSharpInternalDescription = 'remoteFile___childImageSharp___internal___description',
  RemoteFileChildImageSharpInternalFieldOwners = 'remoteFile___childImageSharp___internal___fieldOwners',
  RemoteFileChildImageSharpInternalIgnoreType = 'remoteFile___childImageSharp___internal___ignoreType',
  RemoteFileChildImageSharpInternalMediaType = 'remoteFile___childImageSharp___internal___mediaType',
  RemoteFileChildImageSharpInternalOwner = 'remoteFile___childImageSharp___internal___owner',
  RemoteFileChildImageSharpInternalType = 'remoteFile___childImageSharp___internal___type',
  RemoteFileChildImageSharpOriginalHeight = 'remoteFile___childImageSharp___original___height',
  RemoteFileChildImageSharpOriginalSrc = 'remoteFile___childImageSharp___original___src',
  RemoteFileChildImageSharpOriginalWidth = 'remoteFile___childImageSharp___original___width',
  RemoteFileChildImageSharpParentChildren = 'remoteFile___childImageSharp___parent___children',
  RemoteFileChildImageSharpParentId = 'remoteFile___childImageSharp___parent___id',
  RemoteFileChildImageSharpResizeAspectRatio = 'remoteFile___childImageSharp___resize___aspectRatio',
  RemoteFileChildImageSharpResizeHeight = 'remoteFile___childImageSharp___resize___height',
  RemoteFileChildImageSharpResizeOriginalName = 'remoteFile___childImageSharp___resize___originalName',
  RemoteFileChildImageSharpResizeSrc = 'remoteFile___childImageSharp___resize___src',
  RemoteFileChildImageSharpResizeTracedSvg = 'remoteFile___childImageSharp___resize___tracedSVG',
  RemoteFileChildImageSharpResizeWidth = 'remoteFile___childImageSharp___resize___width',
  RemoteFileChildren = 'remoteFile___children',
  RemoteFileChildrenImageSharp = 'remoteFile___childrenImageSharp',
  RemoteFileChildrenImageSharpChildren = 'remoteFile___childrenImageSharp___children',
  RemoteFileChildrenImageSharpChildrenChildren = 'remoteFile___childrenImageSharp___children___children',
  RemoteFileChildrenImageSharpChildrenId = 'remoteFile___childrenImageSharp___children___id',
  RemoteFileChildrenImageSharpFixedAspectRatio = 'remoteFile___childrenImageSharp___fixed___aspectRatio',
  RemoteFileChildrenImageSharpFixedBase64 = 'remoteFile___childrenImageSharp___fixed___base64',
  RemoteFileChildrenImageSharpFixedHeight = 'remoteFile___childrenImageSharp___fixed___height',
  RemoteFileChildrenImageSharpFixedOriginalName = 'remoteFile___childrenImageSharp___fixed___originalName',
  RemoteFileChildrenImageSharpFixedSrc = 'remoteFile___childrenImageSharp___fixed___src',
  RemoteFileChildrenImageSharpFixedSrcSet = 'remoteFile___childrenImageSharp___fixed___srcSet',
  RemoteFileChildrenImageSharpFixedSrcSetWebp = 'remoteFile___childrenImageSharp___fixed___srcSetWebp',
  RemoteFileChildrenImageSharpFixedSrcWebp = 'remoteFile___childrenImageSharp___fixed___srcWebp',
  RemoteFileChildrenImageSharpFixedTracedSvg = 'remoteFile___childrenImageSharp___fixed___tracedSVG',
  RemoteFileChildrenImageSharpFixedWidth = 'remoteFile___childrenImageSharp___fixed___width',
  RemoteFileChildrenImageSharpFluidAspectRatio = 'remoteFile___childrenImageSharp___fluid___aspectRatio',
  RemoteFileChildrenImageSharpFluidBase64 = 'remoteFile___childrenImageSharp___fluid___base64',
  RemoteFileChildrenImageSharpFluidOriginalImg = 'remoteFile___childrenImageSharp___fluid___originalImg',
  RemoteFileChildrenImageSharpFluidOriginalName = 'remoteFile___childrenImageSharp___fluid___originalName',
  RemoteFileChildrenImageSharpFluidPresentationHeight = 'remoteFile___childrenImageSharp___fluid___presentationHeight',
  RemoteFileChildrenImageSharpFluidPresentationWidth = 'remoteFile___childrenImageSharp___fluid___presentationWidth',
  RemoteFileChildrenImageSharpFluidSizes = 'remoteFile___childrenImageSharp___fluid___sizes',
  RemoteFileChildrenImageSharpFluidSrc = 'remoteFile___childrenImageSharp___fluid___src',
  RemoteFileChildrenImageSharpFluidSrcSet = 'remoteFile___childrenImageSharp___fluid___srcSet',
  RemoteFileChildrenImageSharpFluidSrcSetWebp = 'remoteFile___childrenImageSharp___fluid___srcSetWebp',
  RemoteFileChildrenImageSharpFluidSrcWebp = 'remoteFile___childrenImageSharp___fluid___srcWebp',
  RemoteFileChildrenImageSharpFluidTracedSvg = 'remoteFile___childrenImageSharp___fluid___tracedSVG',
  RemoteFileChildrenImageSharpGatsbyImageData = 'remoteFile___childrenImageSharp___gatsbyImageData',
  RemoteFileChildrenImageSharpId = 'remoteFile___childrenImageSharp___id',
  RemoteFileChildrenImageSharpInternalContent = 'remoteFile___childrenImageSharp___internal___content',
  RemoteFileChildrenImageSharpInternalContentDigest = 'remoteFile___childrenImageSharp___internal___contentDigest',
  RemoteFileChildrenImageSharpInternalDescription = 'remoteFile___childrenImageSharp___internal___description',
  RemoteFileChildrenImageSharpInternalFieldOwners = 'remoteFile___childrenImageSharp___internal___fieldOwners',
  RemoteFileChildrenImageSharpInternalIgnoreType = 'remoteFile___childrenImageSharp___internal___ignoreType',
  RemoteFileChildrenImageSharpInternalMediaType = 'remoteFile___childrenImageSharp___internal___mediaType',
  RemoteFileChildrenImageSharpInternalOwner = 'remoteFile___childrenImageSharp___internal___owner',
  RemoteFileChildrenImageSharpInternalType = 'remoteFile___childrenImageSharp___internal___type',
  RemoteFileChildrenImageSharpOriginalHeight = 'remoteFile___childrenImageSharp___original___height',
  RemoteFileChildrenImageSharpOriginalSrc = 'remoteFile___childrenImageSharp___original___src',
  RemoteFileChildrenImageSharpOriginalWidth = 'remoteFile___childrenImageSharp___original___width',
  RemoteFileChildrenImageSharpParentChildren = 'remoteFile___childrenImageSharp___parent___children',
  RemoteFileChildrenImageSharpParentId = 'remoteFile___childrenImageSharp___parent___id',
  RemoteFileChildrenImageSharpResizeAspectRatio = 'remoteFile___childrenImageSharp___resize___aspectRatio',
  RemoteFileChildrenImageSharpResizeHeight = 'remoteFile___childrenImageSharp___resize___height',
  RemoteFileChildrenImageSharpResizeOriginalName = 'remoteFile___childrenImageSharp___resize___originalName',
  RemoteFileChildrenImageSharpResizeSrc = 'remoteFile___childrenImageSharp___resize___src',
  RemoteFileChildrenImageSharpResizeTracedSvg = 'remoteFile___childrenImageSharp___resize___tracedSVG',
  RemoteFileChildrenImageSharpResizeWidth = 'remoteFile___childrenImageSharp___resize___width',
  RemoteFileChildrenChildren = 'remoteFile___children___children',
  RemoteFileChildrenChildrenChildren = 'remoteFile___children___children___children',
  RemoteFileChildrenChildrenId = 'remoteFile___children___children___id',
  RemoteFileChildrenId = 'remoteFile___children___id',
  RemoteFileChildrenInternalContent = 'remoteFile___children___internal___content',
  RemoteFileChildrenInternalContentDigest = 'remoteFile___children___internal___contentDigest',
  RemoteFileChildrenInternalDescription = 'remoteFile___children___internal___description',
  RemoteFileChildrenInternalFieldOwners = 'remoteFile___children___internal___fieldOwners',
  RemoteFileChildrenInternalIgnoreType = 'remoteFile___children___internal___ignoreType',
  RemoteFileChildrenInternalMediaType = 'remoteFile___children___internal___mediaType',
  RemoteFileChildrenInternalOwner = 'remoteFile___children___internal___owner',
  RemoteFileChildrenInternalType = 'remoteFile___children___internal___type',
  RemoteFileChildrenParentChildren = 'remoteFile___children___parent___children',
  RemoteFileChildrenParentId = 'remoteFile___children___parent___id',
  RemoteFileCtime = 'remoteFile___ctime',
  RemoteFileCtimeMs = 'remoteFile___ctimeMs',
  RemoteFileDev = 'remoteFile___dev',
  RemoteFileDir = 'remoteFile___dir',
  RemoteFileExt = 'remoteFile___ext',
  RemoteFileExtension = 'remoteFile___extension',
  RemoteFileGid = 'remoteFile___gid',
  RemoteFileHash = 'remoteFile___hash',
  RemoteFileId = 'remoteFile___id',
  RemoteFileIno = 'remoteFile___ino',
  RemoteFileInternalContent = 'remoteFile___internal___content',
  RemoteFileInternalContentDigest = 'remoteFile___internal___contentDigest',
  RemoteFileInternalDescription = 'remoteFile___internal___description',
  RemoteFileInternalFieldOwners = 'remoteFile___internal___fieldOwners',
  RemoteFileInternalIgnoreType = 'remoteFile___internal___ignoreType',
  RemoteFileInternalMediaType = 'remoteFile___internal___mediaType',
  RemoteFileInternalOwner = 'remoteFile___internal___owner',
  RemoteFileInternalType = 'remoteFile___internal___type',
  RemoteFileMode = 'remoteFile___mode',
  RemoteFileModifiedTime = 'remoteFile___modifiedTime',
  RemoteFileMtime = 'remoteFile___mtime',
  RemoteFileMtimeMs = 'remoteFile___mtimeMs',
  RemoteFileName = 'remoteFile___name',
  RemoteFileNlink = 'remoteFile___nlink',
  RemoteFileParentChildren = 'remoteFile___parent___children',
  RemoteFileParentChildrenChildren = 'remoteFile___parent___children___children',
  RemoteFileParentChildrenId = 'remoteFile___parent___children___id',
  RemoteFileParentId = 'remoteFile___parent___id',
  RemoteFileParentInternalContent = 'remoteFile___parent___internal___content',
  RemoteFileParentInternalContentDigest = 'remoteFile___parent___internal___contentDigest',
  RemoteFileParentInternalDescription = 'remoteFile___parent___internal___description',
  RemoteFileParentInternalFieldOwners = 'remoteFile___parent___internal___fieldOwners',
  RemoteFileParentInternalIgnoreType = 'remoteFile___parent___internal___ignoreType',
  RemoteFileParentInternalMediaType = 'remoteFile___parent___internal___mediaType',
  RemoteFileParentInternalOwner = 'remoteFile___parent___internal___owner',
  RemoteFileParentInternalType = 'remoteFile___parent___internal___type',
  RemoteFileParentParentChildren = 'remoteFile___parent___parent___children',
  RemoteFileParentParentId = 'remoteFile___parent___parent___id',
  RemoteFilePrettySize = 'remoteFile___prettySize',
  RemoteFilePublicUrl = 'remoteFile___publicURL',
  RemoteFileRdev = 'remoteFile___rdev',
  RemoteFileRelativeDirectory = 'remoteFile___relativeDirectory',
  RemoteFileRelativePath = 'remoteFile___relativePath',
  RemoteFileRoot = 'remoteFile___root',
  RemoteFileSize = 'remoteFile___size',
  RemoteFileSourceInstanceName = 'remoteFile___sourceInstanceName',
  RemoteFileUid = 'remoteFile___uid',
  ResizeHeight = 'resize___height',
  ResizeSrc = 'resize___src',
  ResizeWidth = 'resize___width',
  Sizes = 'sizes',
  Slug = 'slug',
  SourceUrl = 'sourceUrl',
  SrcSet = 'srcSet',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri',
  Width = 'width',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesChildren = 'wpChildren___nodes___children',
  WpChildrenNodesChildrenChildren = 'wpChildren___nodes___children___children',
  WpChildrenNodesChildrenId = 'wpChildren___nodes___children___id',
  WpChildrenNodesContentTypeName = 'wpChildren___nodes___contentTypeName',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDate = 'wpChildren___nodes___date',
  WpChildrenNodesDateGmt = 'wpChildren___nodes___dateGmt',
  WpChildrenNodesDesiredSlug = 'wpChildren___nodes___desiredSlug',
  WpChildrenNodesEnclosure = 'wpChildren___nodes___enclosure',
  WpChildrenNodesGuid = 'wpChildren___nodes___guid',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesInternalContent = 'wpChildren___nodes___internal___content',
  WpChildrenNodesInternalContentDigest = 'wpChildren___nodes___internal___contentDigest',
  WpChildrenNodesInternalDescription = 'wpChildren___nodes___internal___description',
  WpChildrenNodesInternalFieldOwners = 'wpChildren___nodes___internal___fieldOwners',
  WpChildrenNodesInternalIgnoreType = 'wpChildren___nodes___internal___ignoreType',
  WpChildrenNodesInternalMediaType = 'wpChildren___nodes___internal___mediaType',
  WpChildrenNodesInternalOwner = 'wpChildren___nodes___internal___owner',
  WpChildrenNodesInternalType = 'wpChildren___nodes___internal___type',
  WpChildrenNodesIsContentNode = 'wpChildren___nodes___isContentNode',
  WpChildrenNodesIsTermNode = 'wpChildren___nodes___isTermNode',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesModified = 'wpChildren___nodes___modified',
  WpChildrenNodesModifiedGmt = 'wpChildren___nodes___modifiedGmt',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  WpChildrenNodesParentChildren = 'wpChildren___nodes___parent___children',
  WpChildrenNodesParentId = 'wpChildren___nodes___parent___id',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesStatus = 'wpChildren___nodes___status',
  WpChildrenNodesTemplateTemplateName = 'wpChildren___nodes___template___templateName',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeContentTypeName = 'wpParent___node___contentTypeName',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeDesiredSlug = 'wpParent___node___desiredSlug',
  WpParentNodeEnclosure = 'wpParent___node___enclosure',
  WpParentNodeGuid = 'wpParent___node___guid',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  WpParentNodeIsContentNode = 'wpParent___node___isContentNode',
  WpParentNodeIsTermNode = 'wpParent___node___isTermNode',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeModified = 'wpParent___node___modified',
  WpParentNodeModifiedGmt = 'wpParent___node___modifiedGmt',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeStatus = 'wpParent___node___status',
  WpParentNodeTemplateTemplateName = 'wpParent___node___template___templateName',
  WpParentNodeUri = 'wpParent___node___uri'
}

export type WpMediaItemFilterInput = {
  altText?: InputMaybe<StringQueryOperatorInput>;
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpMediaItemToCommentConnectionFilterInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  filename?: InputMaybe<StringQueryOperatorInput>;
  filesize?: InputMaybe<IntQueryOperatorInput>;
  gatsbyImage?: InputMaybe<JsonQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  mediaDetails?: InputMaybe<WpMediaDetailsFilterInput>;
  mediaItemUrl?: InputMaybe<StringQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  publicUrl?: InputMaybe<StringQueryOperatorInput>;
  remoteFile?: InputMaybe<FileFilterInput>;
  resize?: InputMaybe<RemoteFileResizeFilterInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
};

export type WpMediaItemGroupConnection = {
  __typename?: 'WpMediaItemGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMediaItemEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpMediaItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMediaItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMediaItemGroupConnectionDistinctArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionGroupArgs = {
  field: WpMediaItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMediaItemGroupConnectionMaxArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionMinArgs = {
  field: WpMediaItemFieldsEnum;
};


export type WpMediaItemGroupConnectionSumArgs = {
  field: WpMediaItemFieldsEnum;
};

/** Meta connected to a MediaItem */
export type WpMediaItemMeta = {
  __typename?: 'WpMediaItemMeta';
  /** Aperture measurement of the media item. */
  aperture?: Maybe<Scalars['Float']>;
  /** Information about the camera used to create the media item. */
  camera?: Maybe<Scalars['String']>;
  /** The text string description associated with the media item. */
  caption?: Maybe<Scalars['String']>;
  /** Copyright information associated with the media item. */
  copyright?: Maybe<Scalars['String']>;
  /** The date/time when the media was created. */
  createdTimestamp?: Maybe<Scalars['Int']>;
  /** The original creator of the media item. */
  credit?: Maybe<Scalars['String']>;
  /** The focal length value of the media item. */
  focalLength?: Maybe<Scalars['Float']>;
  /** The ISO (International Organization for Standardization) value of the media item. */
  iso?: Maybe<Scalars['Int']>;
  /** List of keywords used to describe or identfy the media item. */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The vertical or horizontal aspect of the media item. */
  orientation?: Maybe<Scalars['String']>;
  /** The shutter speed information of the media item. */
  shutterSpeed?: Maybe<Scalars['Float']>;
  /** A useful title for the media item. */
  title?: Maybe<Scalars['String']>;
};

export type WpMediaItemMetaFilterInput = {
  aperture?: InputMaybe<FloatQueryOperatorInput>;
  camera?: InputMaybe<StringQueryOperatorInput>;
  caption?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  createdTimestamp?: InputMaybe<IntQueryOperatorInput>;
  credit?: InputMaybe<StringQueryOperatorInput>;
  focalLength?: InputMaybe<FloatQueryOperatorInput>;
  iso?: InputMaybe<IntQueryOperatorInput>;
  keywords?: InputMaybe<StringQueryOperatorInput>;
  orientation?: InputMaybe<StringQueryOperatorInput>;
  shutterSpeed?: InputMaybe<FloatQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMediaItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the mediaItem type and the Comment type */
export type WpMediaItemToCommentConnection = {
  __typename?: 'WpMediaItemToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpMediaItemToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

/** Details of an available size for a media item */
export type WpMediaSize = {
  __typename?: 'WpMediaSize';
  /** The filename of the referenced size */
  file?: Maybe<Scalars['String']>;
  /** The filesize of the resource */
  fileSize?: Maybe<Scalars['Int']>;
  /** The height of the referenced size */
  height?: Maybe<Scalars['String']>;
  /** The mime type of the referenced size */
  mimeType?: Maybe<Scalars['String']>;
  /** The referenced size name */
  name?: Maybe<Scalars['String']>;
  /** The url of the referenced size */
  sourceUrl?: Maybe<Scalars['String']>;
  /** The width of the referenced size */
  width?: Maybe<Scalars['String']>;
};

export type WpMediaSizeFilterInput = {
  file?: InputMaybe<StringQueryOperatorInput>;
  fileSize?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<StringQueryOperatorInput>;
  mimeType?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  sourceUrl?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMediaSizeFilterListInput = {
  elemMatch?: InputMaybe<WpMediaSizeFilterInput>;
};

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type WpMenu = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpMenu';
  children: Array<Node>;
  /** The number of items in the menu */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  id: Scalars['ID'];
  internal: Internal;
  /** The locations a menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** Connection between the Menu type and the MenuItem type */
  menuItems?: Maybe<WpMenuToMenuItemConnection>;
  /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
  slug?: Maybe<Scalars['String']>;
};

export type WpMenuConnection = {
  __typename?: 'WpMenuConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMenuEdge>;
  group: Array<WpMenuGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMenuConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionGroupArgs = {
  field: WpMenuFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMenuConnectionMaxArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionMinArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuConnectionSumArgs = {
  field: WpMenuFieldsEnum;
};

export type WpMenuEdge = {
  __typename?: 'WpMenuEdge';
  next?: Maybe<WpMenu>;
  node: WpMenu;
  previous?: Maybe<WpMenu>;
};

export enum WpMenuFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Count = 'count',
  DatabaseId = 'databaseId',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Locations = 'locations',
  MenuItemsNodes = 'menuItems___nodes',
  MenuItemsNodesChildItemsNodes = 'menuItems___nodes___childItems___nodes',
  MenuItemsNodesChildren = 'menuItems___nodes___children',
  MenuItemsNodesChildrenChildren = 'menuItems___nodes___children___children',
  MenuItemsNodesChildrenId = 'menuItems___nodes___children___id',
  MenuItemsNodesCssClasses = 'menuItems___nodes___cssClasses',
  MenuItemsNodesDatabaseId = 'menuItems___nodes___databaseId',
  MenuItemsNodesDescription = 'menuItems___nodes___description',
  MenuItemsNodesId = 'menuItems___nodes___id',
  MenuItemsNodesInternalContent = 'menuItems___nodes___internal___content',
  MenuItemsNodesInternalContentDigest = 'menuItems___nodes___internal___contentDigest',
  MenuItemsNodesInternalDescription = 'menuItems___nodes___internal___description',
  MenuItemsNodesInternalFieldOwners = 'menuItems___nodes___internal___fieldOwners',
  MenuItemsNodesInternalIgnoreType = 'menuItems___nodes___internal___ignoreType',
  MenuItemsNodesInternalMediaType = 'menuItems___nodes___internal___mediaType',
  MenuItemsNodesInternalOwner = 'menuItems___nodes___internal___owner',
  MenuItemsNodesInternalType = 'menuItems___nodes___internal___type',
  MenuItemsNodesLabel = 'menuItems___nodes___label',
  MenuItemsNodesLinkRelationship = 'menuItems___nodes___linkRelationship',
  MenuItemsNodesLocations = 'menuItems___nodes___locations',
  MenuItemsNodesNodeType = 'menuItems___nodes___nodeType',
  MenuItemsNodesOrder = 'menuItems___nodes___order',
  MenuItemsNodesParentDatabaseId = 'menuItems___nodes___parentDatabaseId',
  MenuItemsNodesParentId = 'menuItems___nodes___parentId',
  MenuItemsNodesParentChildren = 'menuItems___nodes___parent___children',
  MenuItemsNodesParentId = 'menuItems___nodes___parent___id',
  MenuItemsNodesPath = 'menuItems___nodes___path',
  MenuItemsNodesTarget = 'menuItems___nodes___target',
  MenuItemsNodesTitle = 'menuItems___nodes___title',
  MenuItemsNodesUrl = 'menuItems___nodes___url',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Slug = 'slug'
}

export type WpMenuFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menuItems?: InputMaybe<WpMenuToMenuItemConnectionFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuGroupConnection = {
  __typename?: 'WpMenuGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMenuEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpMenuGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMenu>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMenuGroupConnectionDistinctArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionGroupArgs = {
  field: WpMenuFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMenuGroupConnectionMaxArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionMinArgs = {
  field: WpMenuFieldsEnum;
};


export type WpMenuGroupConnectionSumArgs = {
  field: WpMenuFieldsEnum;
};

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type WpMenuItem = Node & WpDatabaseIdentifier & WpNode & {
  __typename?: 'WpMenuItem';
  /** Connection between the MenuItem type and the MenuItem type */
  childItems?: Maybe<WpMenuItemToMenuItemConnection>;
  children: Array<Node>;
  /** Connection from MenuItem to it&#039;s connected node */
  connectedNode?: Maybe<WpMenuItemToMenuItemLinkableConnectionEdge>;
  /** Class attribute for the menu item link */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Description of the menu item. */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Label or title of the menu item. */
  label?: Maybe<Scalars['String']>;
  /** Link relationship (XFN) of the menu item. */
  linkRelationship?: Maybe<Scalars['String']>;
  /** The locations the menu item&#039;s Menu is assigned to */
  locations?: Maybe<Array<Maybe<WpMenuLocationEnum>>>;
  /** The Menu a MenuItem is part of */
  menu?: Maybe<WpMenuItemToMenuConnectionEdge>;
  nodeType?: Maybe<Scalars['String']>;
  /** Menu item order */
  order?: Maybe<Scalars['Int']>;
  parent?: Maybe<Node>;
  /** The database id of the parent menu item or null if it is the root */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent nav menu item object. */
  parentId?: Maybe<Scalars['ID']>;
  /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
  path?: Maybe<Scalars['String']>;
  /** Target attribute for the menu item link. */
  target?: Maybe<Scalars['String']>;
  /** Title attribute for the menu item link */
  title?: Maybe<Scalars['String']>;
  /** URL or destination of the menu item. */
  url?: Maybe<Scalars['String']>;
};

export type WpMenuItemConnection = {
  __typename?: 'WpMenuItemConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMenuItemEdge>;
  group: Array<WpMenuItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMenuItemConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionGroupArgs = {
  field: WpMenuItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMenuItemConnectionMaxArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionMinArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemConnectionSumArgs = {
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemEdge = {
  __typename?: 'WpMenuItemEdge';
  next?: Maybe<WpMenuItem>;
  node: WpMenuItem;
  previous?: Maybe<WpMenuItem>;
};

export enum WpMenuItemFieldsEnum {
  ChildItemsNodes = 'childItems___nodes',
  ChildItemsNodesChildItemsNodes = 'childItems___nodes___childItems___nodes',
  ChildItemsNodesChildren = 'childItems___nodes___children',
  ChildItemsNodesChildrenChildren = 'childItems___nodes___children___children',
  ChildItemsNodesChildrenId = 'childItems___nodes___children___id',
  ChildItemsNodesCssClasses = 'childItems___nodes___cssClasses',
  ChildItemsNodesDatabaseId = 'childItems___nodes___databaseId',
  ChildItemsNodesDescription = 'childItems___nodes___description',
  ChildItemsNodesId = 'childItems___nodes___id',
  ChildItemsNodesInternalContent = 'childItems___nodes___internal___content',
  ChildItemsNodesInternalContentDigest = 'childItems___nodes___internal___contentDigest',
  ChildItemsNodesInternalDescription = 'childItems___nodes___internal___description',
  ChildItemsNodesInternalFieldOwners = 'childItems___nodes___internal___fieldOwners',
  ChildItemsNodesInternalIgnoreType = 'childItems___nodes___internal___ignoreType',
  ChildItemsNodesInternalMediaType = 'childItems___nodes___internal___mediaType',
  ChildItemsNodesInternalOwner = 'childItems___nodes___internal___owner',
  ChildItemsNodesInternalType = 'childItems___nodes___internal___type',
  ChildItemsNodesLabel = 'childItems___nodes___label',
  ChildItemsNodesLinkRelationship = 'childItems___nodes___linkRelationship',
  ChildItemsNodesLocations = 'childItems___nodes___locations',
  ChildItemsNodesNodeType = 'childItems___nodes___nodeType',
  ChildItemsNodesOrder = 'childItems___nodes___order',
  ChildItemsNodesParentDatabaseId = 'childItems___nodes___parentDatabaseId',
  ChildItemsNodesParentId = 'childItems___nodes___parentId',
  ChildItemsNodesParentChildren = 'childItems___nodes___parent___children',
  ChildItemsNodesParentId = 'childItems___nodes___parent___id',
  ChildItemsNodesPath = 'childItems___nodes___path',
  ChildItemsNodesTarget = 'childItems___nodes___target',
  ChildItemsNodesTitle = 'childItems___nodes___title',
  ChildItemsNodesUrl = 'childItems___nodes___url',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ConnectedNodeNodeDatabaseId = 'connectedNode___node___databaseId',
  ConnectedNodeNodeId = 'connectedNode___node___id',
  ConnectedNodeNodeUri = 'connectedNode___node___uri',
  CssClasses = 'cssClasses',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  LinkRelationship = 'linkRelationship',
  Locations = 'locations',
  MenuNodeChildren = 'menu___node___children',
  MenuNodeChildrenChildren = 'menu___node___children___children',
  MenuNodeChildrenId = 'menu___node___children___id',
  MenuNodeCount = 'menu___node___count',
  MenuNodeDatabaseId = 'menu___node___databaseId',
  MenuNodeId = 'menu___node___id',
  MenuNodeInternalContent = 'menu___node___internal___content',
  MenuNodeInternalContentDigest = 'menu___node___internal___contentDigest',
  MenuNodeInternalDescription = 'menu___node___internal___description',
  MenuNodeInternalFieldOwners = 'menu___node___internal___fieldOwners',
  MenuNodeInternalIgnoreType = 'menu___node___internal___ignoreType',
  MenuNodeInternalMediaType = 'menu___node___internal___mediaType',
  MenuNodeInternalOwner = 'menu___node___internal___owner',
  MenuNodeInternalType = 'menu___node___internal___type',
  MenuNodeLocations = 'menu___node___locations',
  MenuNodeMenuItemsNodes = 'menu___node___menuItems___nodes',
  MenuNodeName = 'menu___node___name',
  MenuNodeNodeType = 'menu___node___nodeType',
  MenuNodeParentChildren = 'menu___node___parent___children',
  MenuNodeParentId = 'menu___node___parent___id',
  MenuNodeSlug = 'menu___node___slug',
  NodeType = 'nodeType',
  Order = 'order',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Path = 'path',
  Target = 'target',
  Title = 'title',
  Url = 'url'
}

export type WpMenuItemFilterInput = {
  childItems?: InputMaybe<WpMenuItemToMenuItemConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedNode?: InputMaybe<WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput>;
  cssClasses?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  linkRelationship?: InputMaybe<StringQueryOperatorInput>;
  locations?: InputMaybe<WpMenuLocationEnumQueryOperatorInput>;
  menu?: InputMaybe<WpMenuItemToMenuConnectionEdgeFilterInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  order?: InputMaybe<IntQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemFilterListInput = {
  elemMatch?: InputMaybe<WpMenuItemFilterInput>;
};

export type WpMenuItemGroupConnection = {
  __typename?: 'WpMenuItemGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpMenuItemEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpMenuItemGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpMenuItem>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpMenuItemGroupConnectionDistinctArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionGroupArgs = {
  field: WpMenuItemFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpMenuItemGroupConnectionMaxArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionMinArgs = {
  field: WpMenuItemFieldsEnum;
};


export type WpMenuItemGroupConnectionSumArgs = {
  field: WpMenuItemFieldsEnum;
};

export type WpMenuItemLinkable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpMenuItemLinkableFilterInput = {
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpMenuItemSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMenuItemFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the MenuItem type and the Menu type */
export type WpMenuItemToMenuConnectionEdge = {
  __typename?: 'WpMenuItemToMenuConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpMenu>;
};

export type WpMenuItemToMenuConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMenuFilterInput>;
};

/** Connection between the MenuItem type and the MenuItem type */
export type WpMenuItemToMenuItemConnection = {
  __typename?: 'WpMenuItemToMenuItemConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuItemToMenuItemConnectionFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
};

/** Connection between the MenuItem type and the MenuItemLinkable type */
export type WpMenuItemToMenuItemLinkableConnectionEdge = {
  __typename?: 'WpMenuItemToMenuItemLinkableConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpMenuItemLinkable>;
};

export type WpMenuItemToMenuItemLinkableConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMenuItemLinkableFilterInput>;
};

/** Registered menu locations */
export enum WpMenuLocationEnum {
  Empty = 'EMPTY'
}

export type WpMenuLocationEnumQueryOperatorInput = {
  eq?: InputMaybe<WpMenuLocationEnum>;
  in?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
  ne?: InputMaybe<WpMenuLocationEnum>;
  nin?: InputMaybe<Array<InputMaybe<WpMenuLocationEnum>>>;
};

export type WpMenuSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpMenuFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the Menu type and the MenuItem type */
export type WpMenuToMenuItemConnection = {
  __typename?: 'WpMenuToMenuItemConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpMenuItem>>>;
};

export type WpMenuToMenuItemConnectionFilterInput = {
  nodes?: InputMaybe<WpMenuItemFilterListInput>;
};

export type WpNode = {
  /** The globally unique ID for the object */
  id: Scalars['ID'];
};

export type WpNodeFilterInput = {
  id?: InputMaybe<IdQueryOperatorInput>;
};

export type WpNodeWithAuthor = {
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
};

/** Connection between the NodeWithAuthor type and the User type */
export type WpNodeWithAuthorToUserConnectionEdge = {
  __typename?: 'WpNodeWithAuthorToUserConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpUser>;
};

export type WpNodeWithAuthorToUserConnectionEdgeFilterInput = {
  node?: InputMaybe<WpUserFilterInput>;
};

export type WpNodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
};

export type WpNodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
};

export type WpNodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
};

export type WpNodeWithFeaturedImage = {
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export type WpNodeWithFeaturedImageToMediaItemConnectionEdge = {
  __typename?: 'WpNodeWithFeaturedImageToMediaItemConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpMediaItem>;
};

export type WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput = {
  node?: InputMaybe<WpMediaItemFilterInput>;
};

export type WpNodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
};

export type WpNodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
};

/** Connection between the NodeWithRevisions type and the ContentNode type */
export type WpNodeWithRevisionsToContentNodeConnectionEdge = {
  __typename?: 'WpNodeWithRevisionsToContentNodeConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpContentNode>;
};

export type WpNodeWithTemplate = {
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
};

export type WpNodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
};

export type WpNodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
};

/** The page type */
export type WpPage = Node & WpBlockEditorContentNode & WpContentNode & WpDatabaseIdentifier & WpHierarchicalContentNode & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithFeaturedImage & WpNodeWithPageAttributes & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpPage';
  /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
  ancestors?: Maybe<WpHierarchicalContentNodeToContentNodeAncestorsConnection>;
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the page type and the Comment type */
  comments?: Maybe<WpPageToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether this page is set to the static front page. */
  isFrontPage: Scalars['Boolean'];
  /** Whether this page is set to the blog posts page. */
  isPostsPage: Scalars['Boolean'];
  /** Whether this page is set to the privacy page. */
  isPrivacyPage: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Database id of the parent node */
  parentDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the parent node. */
  parentId?: Maybe<Scalars['ID']>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** Connection between the HierarchicalContentNode type and the ContentNode type */
  wpChildren?: Maybe<WpHierarchicalContentNodeToContentNodeChildrenConnection>;
  /** The parent of the node. The parent object can be of various types */
  wpParent?: Maybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdge>;
};


/** The page type */
export type WpPageDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The page type */
export type WpPageModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpPageConnection = {
  __typename?: 'WpPageConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPageEdge>;
  group: Array<WpPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPageConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionGroupArgs = {
  field: WpPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPageConnectionMaxArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionMinArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageConnectionSumArgs = {
  field: WpPageFieldsEnum;
};

export type WpPageEdge = {
  __typename?: 'WpPageEdge';
  next?: Maybe<WpPage>;
  node: WpPage;
  previous?: Maybe<WpPage>;
};

export enum WpPageFieldsEnum {
  AncestorsNodes = 'ancestors___nodes',
  AncestorsNodesChildren = 'ancestors___nodes___children',
  AncestorsNodesChildrenChildren = 'ancestors___nodes___children___children',
  AncestorsNodesChildrenId = 'ancestors___nodes___children___id',
  AncestorsNodesContentTypeName = 'ancestors___nodes___contentTypeName',
  AncestorsNodesDatabaseId = 'ancestors___nodes___databaseId',
  AncestorsNodesDate = 'ancestors___nodes___date',
  AncestorsNodesDateGmt = 'ancestors___nodes___dateGmt',
  AncestorsNodesDesiredSlug = 'ancestors___nodes___desiredSlug',
  AncestorsNodesEnclosure = 'ancestors___nodes___enclosure',
  AncestorsNodesGuid = 'ancestors___nodes___guid',
  AncestorsNodesId = 'ancestors___nodes___id',
  AncestorsNodesInternalContent = 'ancestors___nodes___internal___content',
  AncestorsNodesInternalContentDigest = 'ancestors___nodes___internal___contentDigest',
  AncestorsNodesInternalDescription = 'ancestors___nodes___internal___description',
  AncestorsNodesInternalFieldOwners = 'ancestors___nodes___internal___fieldOwners',
  AncestorsNodesInternalIgnoreType = 'ancestors___nodes___internal___ignoreType',
  AncestorsNodesInternalMediaType = 'ancestors___nodes___internal___mediaType',
  AncestorsNodesInternalOwner = 'ancestors___nodes___internal___owner',
  AncestorsNodesInternalType = 'ancestors___nodes___internal___type',
  AncestorsNodesIsContentNode = 'ancestors___nodes___isContentNode',
  AncestorsNodesIsTermNode = 'ancestors___nodes___isTermNode',
  AncestorsNodesLink = 'ancestors___nodes___link',
  AncestorsNodesModified = 'ancestors___nodes___modified',
  AncestorsNodesModifiedGmt = 'ancestors___nodes___modifiedGmt',
  AncestorsNodesNodeType = 'ancestors___nodes___nodeType',
  AncestorsNodesParentChildren = 'ancestors___nodes___parent___children',
  AncestorsNodesParentId = 'ancestors___nodes___parent___id',
  AncestorsNodesSlug = 'ancestors___nodes___slug',
  AncestorsNodesStatus = 'ancestors___nodes___status',
  AncestorsNodesTemplateTemplateName = 'ancestors___nodes___template___templateName',
  AncestorsNodesUri = 'ancestors___nodes___uri',
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeBlockEditorPreviewsNodes = 'author___node___blockEditorPreviews___nodes',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorNodeIsContentNode = 'author___node___isContentNode',
  AuthorNodeIsTermNode = 'author___node___isTermNode',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  Blocks = 'blocks',
  BlocksJson = 'blocksJSON',
  BlocksAttributesJson = 'blocks___attributesJSON',
  BlocksDynamicContent = 'blocks___dynamicContent',
  BlocksInnerBlocks = 'blocks___innerBlocks',
  BlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___innerBlocks___isDynamic',
  BlocksInnerBlocksInnerBlocksName = 'blocks___innerBlocks___innerBlocks___name',
  BlocksInnerBlocksInnerBlocksOrder = 'blocks___innerBlocks___innerBlocks___order',
  BlocksInnerBlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___innerBlocks___originalContent',
  BlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksInnerBlocksSaveContent = 'blocks___innerBlocks___innerBlocks___saveContent',
  BlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___isDynamic',
  BlocksInnerBlocksName = 'blocks___innerBlocks___name',
  BlocksInnerBlocksOrder = 'blocks___innerBlocks___order',
  BlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___originalContent',
  BlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksParentNodeId = 'blocks___innerBlocks___parentNode___id',
  BlocksInnerBlocksSaveContent = 'blocks___innerBlocks___saveContent',
  BlocksIsDynamic = 'blocks___isDynamic',
  BlocksName = 'blocks___name',
  BlocksOrder = 'blocks___order',
  BlocksOriginalContent = 'blocks___originalContent',
  BlocksParentNodeDatabaseId = 'blocks___parentNodeDatabaseId',
  BlocksParentNodeId = 'blocks___parentNode___id',
  BlocksSaveContent = 'blocks___saveContent',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  Content = 'content',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  FeaturedImageDatabaseId = 'featuredImageDatabaseId',
  FeaturedImageId = 'featuredImageId',
  FeaturedImageNodeAltText = 'featuredImage___node___altText',
  FeaturedImageNodeAncestorsNodes = 'featuredImage___node___ancestors___nodes',
  FeaturedImageNodeAuthorDatabaseId = 'featuredImage___node___authorDatabaseId',
  FeaturedImageNodeAuthorId = 'featuredImage___node___authorId',
  FeaturedImageNodeCaption = 'featuredImage___node___caption',
  FeaturedImageNodeChildren = 'featuredImage___node___children',
  FeaturedImageNodeChildrenChildren = 'featuredImage___node___children___children',
  FeaturedImageNodeChildrenId = 'featuredImage___node___children___id',
  FeaturedImageNodeCommentCount = 'featuredImage___node___commentCount',
  FeaturedImageNodeCommentStatus = 'featuredImage___node___commentStatus',
  FeaturedImageNodeCommentsNodes = 'featuredImage___node___comments___nodes',
  FeaturedImageNodeContentTypeName = 'featuredImage___node___contentTypeName',
  FeaturedImageNodeDatabaseId = 'featuredImage___node___databaseId',
  FeaturedImageNodeDate = 'featuredImage___node___date',
  FeaturedImageNodeDateGmt = 'featuredImage___node___dateGmt',
  FeaturedImageNodeDescription = 'featuredImage___node___description',
  FeaturedImageNodeDesiredSlug = 'featuredImage___node___desiredSlug',
  FeaturedImageNodeEnclosure = 'featuredImage___node___enclosure',
  FeaturedImageNodeFileSize = 'featuredImage___node___fileSize',
  FeaturedImageNodeFilename = 'featuredImage___node___filename',
  FeaturedImageNodeFilesize = 'featuredImage___node___filesize',
  FeaturedImageNodeGatsbyImage = 'featuredImage___node___gatsbyImage',
  FeaturedImageNodeGuid = 'featuredImage___node___guid',
  FeaturedImageNodeHeight = 'featuredImage___node___height',
  FeaturedImageNodeId = 'featuredImage___node___id',
  FeaturedImageNodeInternalContent = 'featuredImage___node___internal___content',
  FeaturedImageNodeInternalContentDigest = 'featuredImage___node___internal___contentDigest',
  FeaturedImageNodeInternalDescription = 'featuredImage___node___internal___description',
  FeaturedImageNodeInternalFieldOwners = 'featuredImage___node___internal___fieldOwners',
  FeaturedImageNodeInternalIgnoreType = 'featuredImage___node___internal___ignoreType',
  FeaturedImageNodeInternalMediaType = 'featuredImage___node___internal___mediaType',
  FeaturedImageNodeInternalOwner = 'featuredImage___node___internal___owner',
  FeaturedImageNodeInternalType = 'featuredImage___node___internal___type',
  FeaturedImageNodeIsContentNode = 'featuredImage___node___isContentNode',
  FeaturedImageNodeIsTermNode = 'featuredImage___node___isTermNode',
  FeaturedImageNodeLink = 'featuredImage___node___link',
  FeaturedImageNodeLocalFileAbsolutePath = 'featuredImage___node___localFile___absolutePath',
  FeaturedImageNodeLocalFileAccessTime = 'featuredImage___node___localFile___accessTime',
  FeaturedImageNodeLocalFileAtime = 'featuredImage___node___localFile___atime',
  FeaturedImageNodeLocalFileAtimeMs = 'featuredImage___node___localFile___atimeMs',
  FeaturedImageNodeLocalFileBase = 'featuredImage___node___localFile___base',
  FeaturedImageNodeLocalFileBirthTime = 'featuredImage___node___localFile___birthTime',
  FeaturedImageNodeLocalFileBirthtime = 'featuredImage___node___localFile___birthtime',
  FeaturedImageNodeLocalFileBirthtimeMs = 'featuredImage___node___localFile___birthtimeMs',
  FeaturedImageNodeLocalFileBlksize = 'featuredImage___node___localFile___blksize',
  FeaturedImageNodeLocalFileBlocks = 'featuredImage___node___localFile___blocks',
  FeaturedImageNodeLocalFileChangeTime = 'featuredImage___node___localFile___changeTime',
  FeaturedImageNodeLocalFileChildren = 'featuredImage___node___localFile___children',
  FeaturedImageNodeLocalFileChildrenImageSharp = 'featuredImage___node___localFile___childrenImageSharp',
  FeaturedImageNodeLocalFileCtime = 'featuredImage___node___localFile___ctime',
  FeaturedImageNodeLocalFileCtimeMs = 'featuredImage___node___localFile___ctimeMs',
  FeaturedImageNodeLocalFileDev = 'featuredImage___node___localFile___dev',
  FeaturedImageNodeLocalFileDir = 'featuredImage___node___localFile___dir',
  FeaturedImageNodeLocalFileExt = 'featuredImage___node___localFile___ext',
  FeaturedImageNodeLocalFileExtension = 'featuredImage___node___localFile___extension',
  FeaturedImageNodeLocalFileGid = 'featuredImage___node___localFile___gid',
  FeaturedImageNodeLocalFileHash = 'featuredImage___node___localFile___hash',
  FeaturedImageNodeLocalFileId = 'featuredImage___node___localFile___id',
  FeaturedImageNodeLocalFileIno = 'featuredImage___node___localFile___ino',
  FeaturedImageNodeLocalFileMode = 'featuredImage___node___localFile___mode',
  FeaturedImageNodeLocalFileModifiedTime = 'featuredImage___node___localFile___modifiedTime',
  FeaturedImageNodeLocalFileMtime = 'featuredImage___node___localFile___mtime',
  FeaturedImageNodeLocalFileMtimeMs = 'featuredImage___node___localFile___mtimeMs',
  FeaturedImageNodeLocalFileName = 'featuredImage___node___localFile___name',
  FeaturedImageNodeLocalFileNlink = 'featuredImage___node___localFile___nlink',
  FeaturedImageNodeLocalFilePrettySize = 'featuredImage___node___localFile___prettySize',
  FeaturedImageNodeLocalFilePublicUrl = 'featuredImage___node___localFile___publicURL',
  FeaturedImageNodeLocalFileRdev = 'featuredImage___node___localFile___rdev',
  FeaturedImageNodeLocalFileRelativeDirectory = 'featuredImage___node___localFile___relativeDirectory',
  FeaturedImageNodeLocalFileRelativePath = 'featuredImage___node___localFile___relativePath',
  FeaturedImageNodeLocalFileRoot = 'featuredImage___node___localFile___root',
  FeaturedImageNodeLocalFileSize = 'featuredImage___node___localFile___size',
  FeaturedImageNodeLocalFileSourceInstanceName = 'featuredImage___node___localFile___sourceInstanceName',
  FeaturedImageNodeLocalFileUid = 'featuredImage___node___localFile___uid',
  FeaturedImageNodeMediaDetailsFile = 'featuredImage___node___mediaDetails___file',
  FeaturedImageNodeMediaDetailsHeight = 'featuredImage___node___mediaDetails___height',
  FeaturedImageNodeMediaDetailsSizes = 'featuredImage___node___mediaDetails___sizes',
  FeaturedImageNodeMediaDetailsWidth = 'featuredImage___node___mediaDetails___width',
  FeaturedImageNodeMediaItemUrl = 'featuredImage___node___mediaItemUrl',
  FeaturedImageNodeMediaType = 'featuredImage___node___mediaType',
  FeaturedImageNodeMimeType = 'featuredImage___node___mimeType',
  FeaturedImageNodeModified = 'featuredImage___node___modified',
  FeaturedImageNodeModifiedGmt = 'featuredImage___node___modifiedGmt',
  FeaturedImageNodeNodeType = 'featuredImage___node___nodeType',
  FeaturedImageNodeParentDatabaseId = 'featuredImage___node___parentDatabaseId',
  FeaturedImageNodeParentId = 'featuredImage___node___parentId',
  FeaturedImageNodeParentChildren = 'featuredImage___node___parent___children',
  FeaturedImageNodeParentId = 'featuredImage___node___parent___id',
  FeaturedImageNodePublicUrl = 'featuredImage___node___publicUrl',
  FeaturedImageNodeRemoteFileAbsolutePath = 'featuredImage___node___remoteFile___absolutePath',
  FeaturedImageNodeRemoteFileAccessTime = 'featuredImage___node___remoteFile___accessTime',
  FeaturedImageNodeRemoteFileAtime = 'featuredImage___node___remoteFile___atime',
  FeaturedImageNodeRemoteFileAtimeMs = 'featuredImage___node___remoteFile___atimeMs',
  FeaturedImageNodeRemoteFileBase = 'featuredImage___node___remoteFile___base',
  FeaturedImageNodeRemoteFileBirthTime = 'featuredImage___node___remoteFile___birthTime',
  FeaturedImageNodeRemoteFileBirthtime = 'featuredImage___node___remoteFile___birthtime',
  FeaturedImageNodeRemoteFileBirthtimeMs = 'featuredImage___node___remoteFile___birthtimeMs',
  FeaturedImageNodeRemoteFileBlksize = 'featuredImage___node___remoteFile___blksize',
  FeaturedImageNodeRemoteFileBlocks = 'featuredImage___node___remoteFile___blocks',
  FeaturedImageNodeRemoteFileChangeTime = 'featuredImage___node___remoteFile___changeTime',
  FeaturedImageNodeRemoteFileChildren = 'featuredImage___node___remoteFile___children',
  FeaturedImageNodeRemoteFileChildrenImageSharp = 'featuredImage___node___remoteFile___childrenImageSharp',
  FeaturedImageNodeRemoteFileCtime = 'featuredImage___node___remoteFile___ctime',
  FeaturedImageNodeRemoteFileCtimeMs = 'featuredImage___node___remoteFile___ctimeMs',
  FeaturedImageNodeRemoteFileDev = 'featuredImage___node___remoteFile___dev',
  FeaturedImageNodeRemoteFileDir = 'featuredImage___node___remoteFile___dir',
  FeaturedImageNodeRemoteFileExt = 'featuredImage___node___remoteFile___ext',
  FeaturedImageNodeRemoteFileExtension = 'featuredImage___node___remoteFile___extension',
  FeaturedImageNodeRemoteFileGid = 'featuredImage___node___remoteFile___gid',
  FeaturedImageNodeRemoteFileHash = 'featuredImage___node___remoteFile___hash',
  FeaturedImageNodeRemoteFileId = 'featuredImage___node___remoteFile___id',
  FeaturedImageNodeRemoteFileIno = 'featuredImage___node___remoteFile___ino',
  FeaturedImageNodeRemoteFileMode = 'featuredImage___node___remoteFile___mode',
  FeaturedImageNodeRemoteFileModifiedTime = 'featuredImage___node___remoteFile___modifiedTime',
  FeaturedImageNodeRemoteFileMtime = 'featuredImage___node___remoteFile___mtime',
  FeaturedImageNodeRemoteFileMtimeMs = 'featuredImage___node___remoteFile___mtimeMs',
  FeaturedImageNodeRemoteFileName = 'featuredImage___node___remoteFile___name',
  FeaturedImageNodeRemoteFileNlink = 'featuredImage___node___remoteFile___nlink',
  FeaturedImageNodeRemoteFilePrettySize = 'featuredImage___node___remoteFile___prettySize',
  FeaturedImageNodeRemoteFilePublicUrl = 'featuredImage___node___remoteFile___publicURL',
  FeaturedImageNodeRemoteFileRdev = 'featuredImage___node___remoteFile___rdev',
  FeaturedImageNodeRemoteFileRelativeDirectory = 'featuredImage___node___remoteFile___relativeDirectory',
  FeaturedImageNodeRemoteFileRelativePath = 'featuredImage___node___remoteFile___relativePath',
  FeaturedImageNodeRemoteFileRoot = 'featuredImage___node___remoteFile___root',
  FeaturedImageNodeRemoteFileSize = 'featuredImage___node___remoteFile___size',
  FeaturedImageNodeRemoteFileSourceInstanceName = 'featuredImage___node___remoteFile___sourceInstanceName',
  FeaturedImageNodeRemoteFileUid = 'featuredImage___node___remoteFile___uid',
  FeaturedImageNodeResizeHeight = 'featuredImage___node___resize___height',
  FeaturedImageNodeResizeSrc = 'featuredImage___node___resize___src',
  FeaturedImageNodeResizeWidth = 'featuredImage___node___resize___width',
  FeaturedImageNodeSizes = 'featuredImage___node___sizes',
  FeaturedImageNodeSlug = 'featuredImage___node___slug',
  FeaturedImageNodeSourceUrl = 'featuredImage___node___sourceUrl',
  FeaturedImageNodeSrcSet = 'featuredImage___node___srcSet',
  FeaturedImageNodeStatus = 'featuredImage___node___status',
  FeaturedImageNodeTemplateTemplateName = 'featuredImage___node___template___templateName',
  FeaturedImageNodeTitle = 'featuredImage___node___title',
  FeaturedImageNodeUri = 'featuredImage___node___uri',
  FeaturedImageNodeWidth = 'featuredImage___node___width',
  FeaturedImageNodeWpChildrenNodes = 'featuredImage___node___wpChildren___nodes',
  Guid = 'guid',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsFrontPage = 'isFrontPage',
  IsPostsPage = 'isPostsPage',
  IsPrivacyPage = 'isPrivacyPage',
  IsRevision = 'isRevision',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  Link = 'link',
  MenuOrder = 'menuOrder',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentDatabaseId = 'parentDatabaseId',
  ParentId = 'parentId',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreviewBlocks = 'previewBlocks',
  PreviewBlocksJson = 'previewBlocksJSON',
  PreviewBlocksAttributesJson = 'previewBlocks___attributesJSON',
  PreviewBlocksDynamicContent = 'previewBlocks___dynamicContent',
  PreviewBlocksInnerBlocks = 'previewBlocks___innerBlocks',
  PreviewBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksInnerBlocksName = 'previewBlocks___innerBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___innerBlocks___saveContent',
  PreviewBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksName = 'previewBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksParentNodeId = 'previewBlocks___innerBlocks___parentNode___id',
  PreviewBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___saveContent',
  PreviewBlocksIsDynamic = 'previewBlocks___isDynamic',
  PreviewBlocksName = 'previewBlocks___name',
  PreviewBlocksOrder = 'previewBlocks___order',
  PreviewBlocksOriginalContent = 'previewBlocks___originalContent',
  PreviewBlocksParentNodeDatabaseId = 'previewBlocks___parentNodeDatabaseId',
  PreviewBlocksParentNodeId = 'previewBlocks___parentNode___id',
  PreviewBlocksSaveContent = 'previewBlocks___saveContent',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri',
  WpChildrenNodes = 'wpChildren___nodes',
  WpChildrenNodesChildren = 'wpChildren___nodes___children',
  WpChildrenNodesChildrenChildren = 'wpChildren___nodes___children___children',
  WpChildrenNodesChildrenId = 'wpChildren___nodes___children___id',
  WpChildrenNodesContentTypeName = 'wpChildren___nodes___contentTypeName',
  WpChildrenNodesDatabaseId = 'wpChildren___nodes___databaseId',
  WpChildrenNodesDate = 'wpChildren___nodes___date',
  WpChildrenNodesDateGmt = 'wpChildren___nodes___dateGmt',
  WpChildrenNodesDesiredSlug = 'wpChildren___nodes___desiredSlug',
  WpChildrenNodesEnclosure = 'wpChildren___nodes___enclosure',
  WpChildrenNodesGuid = 'wpChildren___nodes___guid',
  WpChildrenNodesId = 'wpChildren___nodes___id',
  WpChildrenNodesInternalContent = 'wpChildren___nodes___internal___content',
  WpChildrenNodesInternalContentDigest = 'wpChildren___nodes___internal___contentDigest',
  WpChildrenNodesInternalDescription = 'wpChildren___nodes___internal___description',
  WpChildrenNodesInternalFieldOwners = 'wpChildren___nodes___internal___fieldOwners',
  WpChildrenNodesInternalIgnoreType = 'wpChildren___nodes___internal___ignoreType',
  WpChildrenNodesInternalMediaType = 'wpChildren___nodes___internal___mediaType',
  WpChildrenNodesInternalOwner = 'wpChildren___nodes___internal___owner',
  WpChildrenNodesInternalType = 'wpChildren___nodes___internal___type',
  WpChildrenNodesIsContentNode = 'wpChildren___nodes___isContentNode',
  WpChildrenNodesIsTermNode = 'wpChildren___nodes___isTermNode',
  WpChildrenNodesLink = 'wpChildren___nodes___link',
  WpChildrenNodesModified = 'wpChildren___nodes___modified',
  WpChildrenNodesModifiedGmt = 'wpChildren___nodes___modifiedGmt',
  WpChildrenNodesNodeType = 'wpChildren___nodes___nodeType',
  WpChildrenNodesParentChildren = 'wpChildren___nodes___parent___children',
  WpChildrenNodesParentId = 'wpChildren___nodes___parent___id',
  WpChildrenNodesSlug = 'wpChildren___nodes___slug',
  WpChildrenNodesStatus = 'wpChildren___nodes___status',
  WpChildrenNodesTemplateTemplateName = 'wpChildren___nodes___template___templateName',
  WpChildrenNodesUri = 'wpChildren___nodes___uri',
  WpParentNodeChildren = 'wpParent___node___children',
  WpParentNodeChildrenChildren = 'wpParent___node___children___children',
  WpParentNodeChildrenId = 'wpParent___node___children___id',
  WpParentNodeContentTypeName = 'wpParent___node___contentTypeName',
  WpParentNodeDatabaseId = 'wpParent___node___databaseId',
  WpParentNodeDate = 'wpParent___node___date',
  WpParentNodeDateGmt = 'wpParent___node___dateGmt',
  WpParentNodeDesiredSlug = 'wpParent___node___desiredSlug',
  WpParentNodeEnclosure = 'wpParent___node___enclosure',
  WpParentNodeGuid = 'wpParent___node___guid',
  WpParentNodeId = 'wpParent___node___id',
  WpParentNodeInternalContent = 'wpParent___node___internal___content',
  WpParentNodeInternalContentDigest = 'wpParent___node___internal___contentDigest',
  WpParentNodeInternalDescription = 'wpParent___node___internal___description',
  WpParentNodeInternalFieldOwners = 'wpParent___node___internal___fieldOwners',
  WpParentNodeInternalIgnoreType = 'wpParent___node___internal___ignoreType',
  WpParentNodeInternalMediaType = 'wpParent___node___internal___mediaType',
  WpParentNodeInternalOwner = 'wpParent___node___internal___owner',
  WpParentNodeInternalType = 'wpParent___node___internal___type',
  WpParentNodeIsContentNode = 'wpParent___node___isContentNode',
  WpParentNodeIsTermNode = 'wpParent___node___isTermNode',
  WpParentNodeLink = 'wpParent___node___link',
  WpParentNodeModified = 'wpParent___node___modified',
  WpParentNodeModifiedGmt = 'wpParent___node___modifiedGmt',
  WpParentNodeNodeType = 'wpParent___node___nodeType',
  WpParentNodeParentChildren = 'wpParent___node___parent___children',
  WpParentNodeParentId = 'wpParent___node___parent___id',
  WpParentNodeSlug = 'wpParent___node___slug',
  WpParentNodeStatus = 'wpParent___node___status',
  WpParentNodeTemplateTemplateName = 'wpParent___node___template___templateName',
  WpParentNodeUri = 'wpParent___node___uri'
}

export type WpPageFilterInput = {
  ancestors?: InputMaybe<WpHierarchicalContentNodeToContentNodeAncestorsConnectionFilterInput>;
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPageToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isFrontPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPostsPage?: InputMaybe<BooleanQueryOperatorInput>;
  isPrivacyPage?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  menuOrder?: InputMaybe<IntQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  parentDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  parentId?: InputMaybe<IdQueryOperatorInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  wpChildren?: InputMaybe<WpHierarchicalContentNodeToContentNodeChildrenConnectionFilterInput>;
  wpParent?: InputMaybe<WpHierarchicalContentNodeToParentContentNodeConnectionEdgeFilterInput>;
};

export type WpPageFilterListInput = {
  elemMatch?: InputMaybe<WpPageFilterInput>;
};

export type WpPageGroupConnection = {
  __typename?: 'WpPageGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPageEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpPageGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPage>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPageGroupConnectionDistinctArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionGroupArgs = {
  field: WpPageFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPageGroupConnectionMaxArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionMinArgs = {
  field: WpPageFieldsEnum;
};


export type WpPageGroupConnectionSumArgs = {
  field: WpPageFieldsEnum;
};

export type WpPageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPageFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the page type and the Comment type */
export type WpPageToCommentConnection = {
  __typename?: 'WpPageToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPageToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

/** The post type */
export type WpPost = Node & WpBlockEditorContentNode & WpContentNode & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpNodeWithAuthor & WpNodeWithComments & WpNodeWithContentEditor & WpNodeWithExcerpt & WpNodeWithFeaturedImage & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpNodeWithTrackbacks & WpUniformResourceIdentifiable & {
  __typename?: 'WpPost';
  /** Connection between the NodeWithAuthor type and the User type */
  author?: Maybe<WpNodeWithAuthorToUserConnectionEdge>;
  /** The database identifier of the author of the node */
  authorDatabaseId?: Maybe<Scalars['Int']>;
  /** The globally unique identifier of the author of the node */
  authorId?: Maybe<Scalars['ID']>;
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  /** Connection between the post type and the category type */
  categories?: Maybe<WpPostToCategoryConnection>;
  children: Array<Node>;
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>;
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>;
  /** Connection between the post type and the Comment type */
  comments?: Maybe<WpPostToCommentConnection>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>;
  /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
  featuredImage?: Maybe<WpNodeWithFeaturedImageToMediaItemConnectionEdge>;
  /** The database identifier for the featured image node assigned to the content node */
  featuredImageDatabaseId?: Maybe<Scalars['Int']>;
  /** Globally unique ID of the featured image assigned to the node */
  featuredImageId?: Maybe<Scalars['ID']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether this page is sticky */
  isSticky: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>;
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Connection between the post type and the postFormat type */
  postFormats?: Maybe<WpPostToPostFormatConnection>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** Connection between the post type and the tag type */
  tags?: Maybe<WpPostToTagConnection>;
  /** The template assigned to a node of content */
  template?: Maybe<WpContentTemplate>;
  /** Connection between the post type and the TermNode type */
  terms?: Maybe<WpPostToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The post type */
export type WpPostModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpPostConnection = {
  __typename?: 'WpPostConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPostEdge>;
  group: Array<WpPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPostConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionGroupArgs = {
  field: WpPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPostConnectionMaxArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionMinArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostConnectionSumArgs = {
  field: WpPostFieldsEnum;
};

export type WpPostEdge = {
  __typename?: 'WpPostEdge';
  next?: Maybe<WpPost>;
  node: WpPost;
  previous?: Maybe<WpPost>;
};

export enum WpPostFieldsEnum {
  AuthorDatabaseId = 'authorDatabaseId',
  AuthorId = 'authorId',
  AuthorNodeAvatarDefault = 'author___node___avatar___default',
  AuthorNodeAvatarExtraAttr = 'author___node___avatar___extraAttr',
  AuthorNodeAvatarForceDefault = 'author___node___avatar___forceDefault',
  AuthorNodeAvatarFoundAvatar = 'author___node___avatar___foundAvatar',
  AuthorNodeAvatarHeight = 'author___node___avatar___height',
  AuthorNodeAvatarRating = 'author___node___avatar___rating',
  AuthorNodeAvatarScheme = 'author___node___avatar___scheme',
  AuthorNodeAvatarSize = 'author___node___avatar___size',
  AuthorNodeAvatarUrl = 'author___node___avatar___url',
  AuthorNodeAvatarWidth = 'author___node___avatar___width',
  AuthorNodeBlockEditorPreviewsNodes = 'author___node___blockEditorPreviews___nodes',
  AuthorNodeCapKey = 'author___node___capKey',
  AuthorNodeCapabilities = 'author___node___capabilities',
  AuthorNodeChildren = 'author___node___children',
  AuthorNodeChildrenChildren = 'author___node___children___children',
  AuthorNodeChildrenId = 'author___node___children___id',
  AuthorNodeCommentsNodes = 'author___node___comments___nodes',
  AuthorNodeDatabaseId = 'author___node___databaseId',
  AuthorNodeDescription = 'author___node___description',
  AuthorNodeEmail = 'author___node___email',
  AuthorNodeExtraCapabilities = 'author___node___extraCapabilities',
  AuthorNodeFirstName = 'author___node___firstName',
  AuthorNodeId = 'author___node___id',
  AuthorNodeInternalContent = 'author___node___internal___content',
  AuthorNodeInternalContentDigest = 'author___node___internal___contentDigest',
  AuthorNodeInternalDescription = 'author___node___internal___description',
  AuthorNodeInternalFieldOwners = 'author___node___internal___fieldOwners',
  AuthorNodeInternalIgnoreType = 'author___node___internal___ignoreType',
  AuthorNodeInternalMediaType = 'author___node___internal___mediaType',
  AuthorNodeInternalOwner = 'author___node___internal___owner',
  AuthorNodeInternalType = 'author___node___internal___type',
  AuthorNodeIsContentNode = 'author___node___isContentNode',
  AuthorNodeIsTermNode = 'author___node___isTermNode',
  AuthorNodeLastName = 'author___node___lastName',
  AuthorNodeLocale = 'author___node___locale',
  AuthorNodeName = 'author___node___name',
  AuthorNodeNicename = 'author___node___nicename',
  AuthorNodeNickname = 'author___node___nickname',
  AuthorNodeNodeType = 'author___node___nodeType',
  AuthorNodePagesNodes = 'author___node___pages___nodes',
  AuthorNodeParentChildren = 'author___node___parent___children',
  AuthorNodeParentId = 'author___node___parent___id',
  AuthorNodePostsNodes = 'author___node___posts___nodes',
  AuthorNodeRegisteredDate = 'author___node___registeredDate',
  AuthorNodeRolesNodes = 'author___node___roles___nodes',
  AuthorNodeSlug = 'author___node___slug',
  AuthorNodeUri = 'author___node___uri',
  AuthorNodeUrl = 'author___node___url',
  AuthorNodeUsername = 'author___node___username',
  Blocks = 'blocks',
  BlocksJson = 'blocksJSON',
  BlocksAttributesJson = 'blocks___attributesJSON',
  BlocksDynamicContent = 'blocks___dynamicContent',
  BlocksInnerBlocks = 'blocks___innerBlocks',
  BlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___innerBlocks___isDynamic',
  BlocksInnerBlocksInnerBlocksName = 'blocks___innerBlocks___innerBlocks___name',
  BlocksInnerBlocksInnerBlocksOrder = 'blocks___innerBlocks___innerBlocks___order',
  BlocksInnerBlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___innerBlocks___originalContent',
  BlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksInnerBlocksSaveContent = 'blocks___innerBlocks___innerBlocks___saveContent',
  BlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___isDynamic',
  BlocksInnerBlocksName = 'blocks___innerBlocks___name',
  BlocksInnerBlocksOrder = 'blocks___innerBlocks___order',
  BlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___originalContent',
  BlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksParentNodeId = 'blocks___innerBlocks___parentNode___id',
  BlocksInnerBlocksSaveContent = 'blocks___innerBlocks___saveContent',
  BlocksIsDynamic = 'blocks___isDynamic',
  BlocksName = 'blocks___name',
  BlocksOrder = 'blocks___order',
  BlocksOriginalContent = 'blocks___originalContent',
  BlocksParentNodeDatabaseId = 'blocks___parentNodeDatabaseId',
  BlocksParentNodeId = 'blocks___parentNode___id',
  BlocksSaveContent = 'blocks___saveContent',
  CategoriesNodes = 'categories___nodes',
  CategoriesNodesAncestorsNodes = 'categories___nodes___ancestors___nodes',
  CategoriesNodesChildren = 'categories___nodes___children',
  CategoriesNodesChildrenChildren = 'categories___nodes___children___children',
  CategoriesNodesChildrenId = 'categories___nodes___children___id',
  CategoriesNodesContentNodesNodes = 'categories___nodes___contentNodes___nodes',
  CategoriesNodesCount = 'categories___nodes___count',
  CategoriesNodesDatabaseId = 'categories___nodes___databaseId',
  CategoriesNodesDescription = 'categories___nodes___description',
  CategoriesNodesId = 'categories___nodes___id',
  CategoriesNodesInternalContent = 'categories___nodes___internal___content',
  CategoriesNodesInternalContentDigest = 'categories___nodes___internal___contentDigest',
  CategoriesNodesInternalDescription = 'categories___nodes___internal___description',
  CategoriesNodesInternalFieldOwners = 'categories___nodes___internal___fieldOwners',
  CategoriesNodesInternalIgnoreType = 'categories___nodes___internal___ignoreType',
  CategoriesNodesInternalMediaType = 'categories___nodes___internal___mediaType',
  CategoriesNodesInternalOwner = 'categories___nodes___internal___owner',
  CategoriesNodesInternalType = 'categories___nodes___internal___type',
  CategoriesNodesIsContentNode = 'categories___nodes___isContentNode',
  CategoriesNodesIsTermNode = 'categories___nodes___isTermNode',
  CategoriesNodesLink = 'categories___nodes___link',
  CategoriesNodesName = 'categories___nodes___name',
  CategoriesNodesNodeType = 'categories___nodes___nodeType',
  CategoriesNodesParentDatabaseId = 'categories___nodes___parentDatabaseId',
  CategoriesNodesParentId = 'categories___nodes___parentId',
  CategoriesNodesParentChildren = 'categories___nodes___parent___children',
  CategoriesNodesParentId = 'categories___nodes___parent___id',
  CategoriesNodesPostsNodes = 'categories___nodes___posts___nodes',
  CategoriesNodesSlug = 'categories___nodes___slug',
  CategoriesNodesTaxonomyName = 'categories___nodes___taxonomyName',
  CategoriesNodesTermGroupId = 'categories___nodes___termGroupId',
  CategoriesNodesTermTaxonomyId = 'categories___nodes___termTaxonomyId',
  CategoriesNodesUri = 'categories___nodes___uri',
  CategoriesNodesWpChildrenNodes = 'categories___nodes___wpChildren___nodes',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CommentCount = 'commentCount',
  CommentStatus = 'commentStatus',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  Content = 'content',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Excerpt = 'excerpt',
  FeaturedImageDatabaseId = 'featuredImageDatabaseId',
  FeaturedImageId = 'featuredImageId',
  FeaturedImageNodeAltText = 'featuredImage___node___altText',
  FeaturedImageNodeAncestorsNodes = 'featuredImage___node___ancestors___nodes',
  FeaturedImageNodeAuthorDatabaseId = 'featuredImage___node___authorDatabaseId',
  FeaturedImageNodeAuthorId = 'featuredImage___node___authorId',
  FeaturedImageNodeCaption = 'featuredImage___node___caption',
  FeaturedImageNodeChildren = 'featuredImage___node___children',
  FeaturedImageNodeChildrenChildren = 'featuredImage___node___children___children',
  FeaturedImageNodeChildrenId = 'featuredImage___node___children___id',
  FeaturedImageNodeCommentCount = 'featuredImage___node___commentCount',
  FeaturedImageNodeCommentStatus = 'featuredImage___node___commentStatus',
  FeaturedImageNodeCommentsNodes = 'featuredImage___node___comments___nodes',
  FeaturedImageNodeContentTypeName = 'featuredImage___node___contentTypeName',
  FeaturedImageNodeDatabaseId = 'featuredImage___node___databaseId',
  FeaturedImageNodeDate = 'featuredImage___node___date',
  FeaturedImageNodeDateGmt = 'featuredImage___node___dateGmt',
  FeaturedImageNodeDescription = 'featuredImage___node___description',
  FeaturedImageNodeDesiredSlug = 'featuredImage___node___desiredSlug',
  FeaturedImageNodeEnclosure = 'featuredImage___node___enclosure',
  FeaturedImageNodeFileSize = 'featuredImage___node___fileSize',
  FeaturedImageNodeFilename = 'featuredImage___node___filename',
  FeaturedImageNodeFilesize = 'featuredImage___node___filesize',
  FeaturedImageNodeGatsbyImage = 'featuredImage___node___gatsbyImage',
  FeaturedImageNodeGuid = 'featuredImage___node___guid',
  FeaturedImageNodeHeight = 'featuredImage___node___height',
  FeaturedImageNodeId = 'featuredImage___node___id',
  FeaturedImageNodeInternalContent = 'featuredImage___node___internal___content',
  FeaturedImageNodeInternalContentDigest = 'featuredImage___node___internal___contentDigest',
  FeaturedImageNodeInternalDescription = 'featuredImage___node___internal___description',
  FeaturedImageNodeInternalFieldOwners = 'featuredImage___node___internal___fieldOwners',
  FeaturedImageNodeInternalIgnoreType = 'featuredImage___node___internal___ignoreType',
  FeaturedImageNodeInternalMediaType = 'featuredImage___node___internal___mediaType',
  FeaturedImageNodeInternalOwner = 'featuredImage___node___internal___owner',
  FeaturedImageNodeInternalType = 'featuredImage___node___internal___type',
  FeaturedImageNodeIsContentNode = 'featuredImage___node___isContentNode',
  FeaturedImageNodeIsTermNode = 'featuredImage___node___isTermNode',
  FeaturedImageNodeLink = 'featuredImage___node___link',
  FeaturedImageNodeLocalFileAbsolutePath = 'featuredImage___node___localFile___absolutePath',
  FeaturedImageNodeLocalFileAccessTime = 'featuredImage___node___localFile___accessTime',
  FeaturedImageNodeLocalFileAtime = 'featuredImage___node___localFile___atime',
  FeaturedImageNodeLocalFileAtimeMs = 'featuredImage___node___localFile___atimeMs',
  FeaturedImageNodeLocalFileBase = 'featuredImage___node___localFile___base',
  FeaturedImageNodeLocalFileBirthTime = 'featuredImage___node___localFile___birthTime',
  FeaturedImageNodeLocalFileBirthtime = 'featuredImage___node___localFile___birthtime',
  FeaturedImageNodeLocalFileBirthtimeMs = 'featuredImage___node___localFile___birthtimeMs',
  FeaturedImageNodeLocalFileBlksize = 'featuredImage___node___localFile___blksize',
  FeaturedImageNodeLocalFileBlocks = 'featuredImage___node___localFile___blocks',
  FeaturedImageNodeLocalFileChangeTime = 'featuredImage___node___localFile___changeTime',
  FeaturedImageNodeLocalFileChildren = 'featuredImage___node___localFile___children',
  FeaturedImageNodeLocalFileChildrenImageSharp = 'featuredImage___node___localFile___childrenImageSharp',
  FeaturedImageNodeLocalFileCtime = 'featuredImage___node___localFile___ctime',
  FeaturedImageNodeLocalFileCtimeMs = 'featuredImage___node___localFile___ctimeMs',
  FeaturedImageNodeLocalFileDev = 'featuredImage___node___localFile___dev',
  FeaturedImageNodeLocalFileDir = 'featuredImage___node___localFile___dir',
  FeaturedImageNodeLocalFileExt = 'featuredImage___node___localFile___ext',
  FeaturedImageNodeLocalFileExtension = 'featuredImage___node___localFile___extension',
  FeaturedImageNodeLocalFileGid = 'featuredImage___node___localFile___gid',
  FeaturedImageNodeLocalFileHash = 'featuredImage___node___localFile___hash',
  FeaturedImageNodeLocalFileId = 'featuredImage___node___localFile___id',
  FeaturedImageNodeLocalFileIno = 'featuredImage___node___localFile___ino',
  FeaturedImageNodeLocalFileMode = 'featuredImage___node___localFile___mode',
  FeaturedImageNodeLocalFileModifiedTime = 'featuredImage___node___localFile___modifiedTime',
  FeaturedImageNodeLocalFileMtime = 'featuredImage___node___localFile___mtime',
  FeaturedImageNodeLocalFileMtimeMs = 'featuredImage___node___localFile___mtimeMs',
  FeaturedImageNodeLocalFileName = 'featuredImage___node___localFile___name',
  FeaturedImageNodeLocalFileNlink = 'featuredImage___node___localFile___nlink',
  FeaturedImageNodeLocalFilePrettySize = 'featuredImage___node___localFile___prettySize',
  FeaturedImageNodeLocalFilePublicUrl = 'featuredImage___node___localFile___publicURL',
  FeaturedImageNodeLocalFileRdev = 'featuredImage___node___localFile___rdev',
  FeaturedImageNodeLocalFileRelativeDirectory = 'featuredImage___node___localFile___relativeDirectory',
  FeaturedImageNodeLocalFileRelativePath = 'featuredImage___node___localFile___relativePath',
  FeaturedImageNodeLocalFileRoot = 'featuredImage___node___localFile___root',
  FeaturedImageNodeLocalFileSize = 'featuredImage___node___localFile___size',
  FeaturedImageNodeLocalFileSourceInstanceName = 'featuredImage___node___localFile___sourceInstanceName',
  FeaturedImageNodeLocalFileUid = 'featuredImage___node___localFile___uid',
  FeaturedImageNodeMediaDetailsFile = 'featuredImage___node___mediaDetails___file',
  FeaturedImageNodeMediaDetailsHeight = 'featuredImage___node___mediaDetails___height',
  FeaturedImageNodeMediaDetailsSizes = 'featuredImage___node___mediaDetails___sizes',
  FeaturedImageNodeMediaDetailsWidth = 'featuredImage___node___mediaDetails___width',
  FeaturedImageNodeMediaItemUrl = 'featuredImage___node___mediaItemUrl',
  FeaturedImageNodeMediaType = 'featuredImage___node___mediaType',
  FeaturedImageNodeMimeType = 'featuredImage___node___mimeType',
  FeaturedImageNodeModified = 'featuredImage___node___modified',
  FeaturedImageNodeModifiedGmt = 'featuredImage___node___modifiedGmt',
  FeaturedImageNodeNodeType = 'featuredImage___node___nodeType',
  FeaturedImageNodeParentDatabaseId = 'featuredImage___node___parentDatabaseId',
  FeaturedImageNodeParentId = 'featuredImage___node___parentId',
  FeaturedImageNodeParentChildren = 'featuredImage___node___parent___children',
  FeaturedImageNodeParentId = 'featuredImage___node___parent___id',
  FeaturedImageNodePublicUrl = 'featuredImage___node___publicUrl',
  FeaturedImageNodeRemoteFileAbsolutePath = 'featuredImage___node___remoteFile___absolutePath',
  FeaturedImageNodeRemoteFileAccessTime = 'featuredImage___node___remoteFile___accessTime',
  FeaturedImageNodeRemoteFileAtime = 'featuredImage___node___remoteFile___atime',
  FeaturedImageNodeRemoteFileAtimeMs = 'featuredImage___node___remoteFile___atimeMs',
  FeaturedImageNodeRemoteFileBase = 'featuredImage___node___remoteFile___base',
  FeaturedImageNodeRemoteFileBirthTime = 'featuredImage___node___remoteFile___birthTime',
  FeaturedImageNodeRemoteFileBirthtime = 'featuredImage___node___remoteFile___birthtime',
  FeaturedImageNodeRemoteFileBirthtimeMs = 'featuredImage___node___remoteFile___birthtimeMs',
  FeaturedImageNodeRemoteFileBlksize = 'featuredImage___node___remoteFile___blksize',
  FeaturedImageNodeRemoteFileBlocks = 'featuredImage___node___remoteFile___blocks',
  FeaturedImageNodeRemoteFileChangeTime = 'featuredImage___node___remoteFile___changeTime',
  FeaturedImageNodeRemoteFileChildren = 'featuredImage___node___remoteFile___children',
  FeaturedImageNodeRemoteFileChildrenImageSharp = 'featuredImage___node___remoteFile___childrenImageSharp',
  FeaturedImageNodeRemoteFileCtime = 'featuredImage___node___remoteFile___ctime',
  FeaturedImageNodeRemoteFileCtimeMs = 'featuredImage___node___remoteFile___ctimeMs',
  FeaturedImageNodeRemoteFileDev = 'featuredImage___node___remoteFile___dev',
  FeaturedImageNodeRemoteFileDir = 'featuredImage___node___remoteFile___dir',
  FeaturedImageNodeRemoteFileExt = 'featuredImage___node___remoteFile___ext',
  FeaturedImageNodeRemoteFileExtension = 'featuredImage___node___remoteFile___extension',
  FeaturedImageNodeRemoteFileGid = 'featuredImage___node___remoteFile___gid',
  FeaturedImageNodeRemoteFileHash = 'featuredImage___node___remoteFile___hash',
  FeaturedImageNodeRemoteFileId = 'featuredImage___node___remoteFile___id',
  FeaturedImageNodeRemoteFileIno = 'featuredImage___node___remoteFile___ino',
  FeaturedImageNodeRemoteFileMode = 'featuredImage___node___remoteFile___mode',
  FeaturedImageNodeRemoteFileModifiedTime = 'featuredImage___node___remoteFile___modifiedTime',
  FeaturedImageNodeRemoteFileMtime = 'featuredImage___node___remoteFile___mtime',
  FeaturedImageNodeRemoteFileMtimeMs = 'featuredImage___node___remoteFile___mtimeMs',
  FeaturedImageNodeRemoteFileName = 'featuredImage___node___remoteFile___name',
  FeaturedImageNodeRemoteFileNlink = 'featuredImage___node___remoteFile___nlink',
  FeaturedImageNodeRemoteFilePrettySize = 'featuredImage___node___remoteFile___prettySize',
  FeaturedImageNodeRemoteFilePublicUrl = 'featuredImage___node___remoteFile___publicURL',
  FeaturedImageNodeRemoteFileRdev = 'featuredImage___node___remoteFile___rdev',
  FeaturedImageNodeRemoteFileRelativeDirectory = 'featuredImage___node___remoteFile___relativeDirectory',
  FeaturedImageNodeRemoteFileRelativePath = 'featuredImage___node___remoteFile___relativePath',
  FeaturedImageNodeRemoteFileRoot = 'featuredImage___node___remoteFile___root',
  FeaturedImageNodeRemoteFileSize = 'featuredImage___node___remoteFile___size',
  FeaturedImageNodeRemoteFileSourceInstanceName = 'featuredImage___node___remoteFile___sourceInstanceName',
  FeaturedImageNodeRemoteFileUid = 'featuredImage___node___remoteFile___uid',
  FeaturedImageNodeResizeHeight = 'featuredImage___node___resize___height',
  FeaturedImageNodeResizeSrc = 'featuredImage___node___resize___src',
  FeaturedImageNodeResizeWidth = 'featuredImage___node___resize___width',
  FeaturedImageNodeSizes = 'featuredImage___node___sizes',
  FeaturedImageNodeSlug = 'featuredImage___node___slug',
  FeaturedImageNodeSourceUrl = 'featuredImage___node___sourceUrl',
  FeaturedImageNodeSrcSet = 'featuredImage___node___srcSet',
  FeaturedImageNodeStatus = 'featuredImage___node___status',
  FeaturedImageNodeTemplateTemplateName = 'featuredImage___node___template___templateName',
  FeaturedImageNodeTitle = 'featuredImage___node___title',
  FeaturedImageNodeUri = 'featuredImage___node___uri',
  FeaturedImageNodeWidth = 'featuredImage___node___width',
  FeaturedImageNodeWpChildrenNodes = 'featuredImage___node___wpChildren___nodes',
  Guid = 'guid',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsRevision = 'isRevision',
  IsSticky = 'isSticky',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PingStatus = 'pingStatus',
  Pinged = 'pinged',
  PostFormatsNodes = 'postFormats___nodes',
  PostFormatsNodesChildren = 'postFormats___nodes___children',
  PostFormatsNodesChildrenChildren = 'postFormats___nodes___children___children',
  PostFormatsNodesChildrenId = 'postFormats___nodes___children___id',
  PostFormatsNodesContentNodesNodes = 'postFormats___nodes___contentNodes___nodes',
  PostFormatsNodesCount = 'postFormats___nodes___count',
  PostFormatsNodesDatabaseId = 'postFormats___nodes___databaseId',
  PostFormatsNodesDescription = 'postFormats___nodes___description',
  PostFormatsNodesId = 'postFormats___nodes___id',
  PostFormatsNodesInternalContent = 'postFormats___nodes___internal___content',
  PostFormatsNodesInternalContentDigest = 'postFormats___nodes___internal___contentDigest',
  PostFormatsNodesInternalDescription = 'postFormats___nodes___internal___description',
  PostFormatsNodesInternalFieldOwners = 'postFormats___nodes___internal___fieldOwners',
  PostFormatsNodesInternalIgnoreType = 'postFormats___nodes___internal___ignoreType',
  PostFormatsNodesInternalMediaType = 'postFormats___nodes___internal___mediaType',
  PostFormatsNodesInternalOwner = 'postFormats___nodes___internal___owner',
  PostFormatsNodesInternalType = 'postFormats___nodes___internal___type',
  PostFormatsNodesIsContentNode = 'postFormats___nodes___isContentNode',
  PostFormatsNodesIsTermNode = 'postFormats___nodes___isTermNode',
  PostFormatsNodesLink = 'postFormats___nodes___link',
  PostFormatsNodesName = 'postFormats___nodes___name',
  PostFormatsNodesNodeType = 'postFormats___nodes___nodeType',
  PostFormatsNodesParentChildren = 'postFormats___nodes___parent___children',
  PostFormatsNodesParentId = 'postFormats___nodes___parent___id',
  PostFormatsNodesPostsNodes = 'postFormats___nodes___posts___nodes',
  PostFormatsNodesSlug = 'postFormats___nodes___slug',
  PostFormatsNodesTaxonomyName = 'postFormats___nodes___taxonomyName',
  PostFormatsNodesTermGroupId = 'postFormats___nodes___termGroupId',
  PostFormatsNodesTermTaxonomyId = 'postFormats___nodes___termTaxonomyId',
  PostFormatsNodesUri = 'postFormats___nodes___uri',
  PreviewBlocks = 'previewBlocks',
  PreviewBlocksJson = 'previewBlocksJSON',
  PreviewBlocksAttributesJson = 'previewBlocks___attributesJSON',
  PreviewBlocksDynamicContent = 'previewBlocks___dynamicContent',
  PreviewBlocksInnerBlocks = 'previewBlocks___innerBlocks',
  PreviewBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksInnerBlocksName = 'previewBlocks___innerBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___innerBlocks___saveContent',
  PreviewBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksName = 'previewBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksParentNodeId = 'previewBlocks___innerBlocks___parentNode___id',
  PreviewBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___saveContent',
  PreviewBlocksIsDynamic = 'previewBlocks___isDynamic',
  PreviewBlocksName = 'previewBlocks___name',
  PreviewBlocksOrder = 'previewBlocks___order',
  PreviewBlocksOriginalContent = 'previewBlocks___originalContent',
  PreviewBlocksParentNodeDatabaseId = 'previewBlocks___parentNodeDatabaseId',
  PreviewBlocksParentNodeId = 'previewBlocks___parentNode___id',
  PreviewBlocksSaveContent = 'previewBlocks___saveContent',
  Slug = 'slug',
  Status = 'status',
  TagsNodes = 'tags___nodes',
  TagsNodesChildren = 'tags___nodes___children',
  TagsNodesChildrenChildren = 'tags___nodes___children___children',
  TagsNodesChildrenId = 'tags___nodes___children___id',
  TagsNodesContentNodesNodes = 'tags___nodes___contentNodes___nodes',
  TagsNodesCount = 'tags___nodes___count',
  TagsNodesDatabaseId = 'tags___nodes___databaseId',
  TagsNodesDescription = 'tags___nodes___description',
  TagsNodesId = 'tags___nodes___id',
  TagsNodesInternalContent = 'tags___nodes___internal___content',
  TagsNodesInternalContentDigest = 'tags___nodes___internal___contentDigest',
  TagsNodesInternalDescription = 'tags___nodes___internal___description',
  TagsNodesInternalFieldOwners = 'tags___nodes___internal___fieldOwners',
  TagsNodesInternalIgnoreType = 'tags___nodes___internal___ignoreType',
  TagsNodesInternalMediaType = 'tags___nodes___internal___mediaType',
  TagsNodesInternalOwner = 'tags___nodes___internal___owner',
  TagsNodesInternalType = 'tags___nodes___internal___type',
  TagsNodesIsContentNode = 'tags___nodes___isContentNode',
  TagsNodesIsTermNode = 'tags___nodes___isTermNode',
  TagsNodesLink = 'tags___nodes___link',
  TagsNodesName = 'tags___nodes___name',
  TagsNodesNodeType = 'tags___nodes___nodeType',
  TagsNodesParentChildren = 'tags___nodes___parent___children',
  TagsNodesParentId = 'tags___nodes___parent___id',
  TagsNodesPostsNodes = 'tags___nodes___posts___nodes',
  TagsNodesSlug = 'tags___nodes___slug',
  TagsNodesTaxonomyName = 'tags___nodes___taxonomyName',
  TagsNodesTermGroupId = 'tags___nodes___termGroupId',
  TagsNodesTermTaxonomyId = 'tags___nodes___termTaxonomyId',
  TagsNodesUri = 'tags___nodes___uri',
  TemplateTemplateName = 'template___templateName',
  TermsNodes = 'terms___nodes',
  TermsNodesChildren = 'terms___nodes___children',
  TermsNodesChildrenChildren = 'terms___nodes___children___children',
  TermsNodesChildrenId = 'terms___nodes___children___id',
  TermsNodesCount = 'terms___nodes___count',
  TermsNodesDatabaseId = 'terms___nodes___databaseId',
  TermsNodesDescription = 'terms___nodes___description',
  TermsNodesId = 'terms___nodes___id',
  TermsNodesInternalContent = 'terms___nodes___internal___content',
  TermsNodesInternalContentDigest = 'terms___nodes___internal___contentDigest',
  TermsNodesInternalDescription = 'terms___nodes___internal___description',
  TermsNodesInternalFieldOwners = 'terms___nodes___internal___fieldOwners',
  TermsNodesInternalIgnoreType = 'terms___nodes___internal___ignoreType',
  TermsNodesInternalMediaType = 'terms___nodes___internal___mediaType',
  TermsNodesInternalOwner = 'terms___nodes___internal___owner',
  TermsNodesInternalType = 'terms___nodes___internal___type',
  TermsNodesIsContentNode = 'terms___nodes___isContentNode',
  TermsNodesIsTermNode = 'terms___nodes___isTermNode',
  TermsNodesLink = 'terms___nodes___link',
  TermsNodesName = 'terms___nodes___name',
  TermsNodesNodeType = 'terms___nodes___nodeType',
  TermsNodesParentChildren = 'terms___nodes___parent___children',
  TermsNodesParentId = 'terms___nodes___parent___id',
  TermsNodesSlug = 'terms___nodes___slug',
  TermsNodesTaxonomyName = 'terms___nodes___taxonomyName',
  TermsNodesTermGroupId = 'terms___nodes___termGroupId',
  TermsNodesTermTaxonomyId = 'terms___nodes___termTaxonomyId',
  TermsNodesUri = 'terms___nodes___uri',
  Title = 'title',
  ToPing = 'toPing',
  Uri = 'uri'
}

export type WpPostFilterInput = {
  author?: InputMaybe<WpNodeWithAuthorToUserConnectionEdgeFilterInput>;
  authorDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  authorId?: InputMaybe<IdQueryOperatorInput>;
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  categories?: InputMaybe<WpPostToCategoryConnectionFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  commentCount?: InputMaybe<IntQueryOperatorInput>;
  commentStatus?: InputMaybe<StringQueryOperatorInput>;
  comments?: InputMaybe<WpPostToCommentConnectionFilterInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<WpNodeWithFeaturedImageToMediaItemConnectionEdgeFilterInput>;
  featuredImageDatabaseId?: InputMaybe<IntQueryOperatorInput>;
  featuredImageId?: InputMaybe<IdQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isSticky?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  pingStatus?: InputMaybe<StringQueryOperatorInput>;
  pinged?: InputMaybe<StringQueryOperatorInput>;
  postFormats?: InputMaybe<WpPostToPostFormatConnectionFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<WpPostToTagConnectionFilterInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  terms?: InputMaybe<WpPostToTermNodeConnectionFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  toPing?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFilterListInput = {
  elemMatch?: InputMaybe<WpPostFilterInput>;
};

/** The postFormat type */
export type WpPostFormat = Node & WpDatabaseIdentifier & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpPostFormat';
  children: Array<Node>;
  /** Connection between the postFormat type and the ContentNode type */
  contentNodes?: Maybe<WpPostFormatToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Connection between the postFormat type and the post type */
  posts?: Maybe<WpPostFormatToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the postFormat type and the Taxonomy type */
  taxonomy?: Maybe<WpPostFormatToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpPostFormatConnection = {
  __typename?: 'WpPostFormatConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPostFormatEdge>;
  group: Array<WpPostFormatGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPostFormatConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionGroupArgs = {
  field: WpPostFormatFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPostFormatConnectionMaxArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionMinArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatConnectionSumArgs = {
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatEdge = {
  __typename?: 'WpPostFormatEdge';
  next?: Maybe<WpPostFormat>;
  node: WpPostFormat;
  previous?: Maybe<WpPostFormat>;
};

export enum WpPostFormatFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesChildren = 'contentNodes___nodes___children',
  ContentNodesNodesChildrenChildren = 'contentNodes___nodes___children___children',
  ContentNodesNodesChildrenId = 'contentNodes___nodes___children___id',
  ContentNodesNodesContentTypeName = 'contentNodes___nodes___contentTypeName',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesInternalContent = 'contentNodes___nodes___internal___content',
  ContentNodesNodesInternalContentDigest = 'contentNodes___nodes___internal___contentDigest',
  ContentNodesNodesInternalDescription = 'contentNodes___nodes___internal___description',
  ContentNodesNodesInternalFieldOwners = 'contentNodes___nodes___internal___fieldOwners',
  ContentNodesNodesInternalIgnoreType = 'contentNodes___nodes___internal___ignoreType',
  ContentNodesNodesInternalMediaType = 'contentNodes___nodes___internal___mediaType',
  ContentNodesNodesInternalOwner = 'contentNodes___nodes___internal___owner',
  ContentNodesNodesInternalType = 'contentNodes___nodes___internal___type',
  ContentNodesNodesIsContentNode = 'contentNodes___nodes___isContentNode',
  ContentNodesNodesIsTermNode = 'contentNodes___nodes___isTermNode',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  ContentNodesNodesParentChildren = 'contentNodes___nodes___parent___children',
  ContentNodesNodesParentId = 'contentNodes___nodes___parent___id',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  Link = 'link',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesBlocks = 'posts___nodes___blocks',
  PostsNodesBlocksJson = 'posts___nodes___blocksJSON',
  PostsNodesBlocksAttributesJson = 'posts___nodes___blocks___attributesJSON',
  PostsNodesBlocksDynamicContent = 'posts___nodes___blocks___dynamicContent',
  PostsNodesBlocksInnerBlocks = 'posts___nodes___blocks___innerBlocks',
  PostsNodesBlocksIsDynamic = 'posts___nodes___blocks___isDynamic',
  PostsNodesBlocksName = 'posts___nodes___blocks___name',
  PostsNodesBlocksOrder = 'posts___nodes___blocks___order',
  PostsNodesBlocksOriginalContent = 'posts___nodes___blocks___originalContent',
  PostsNodesBlocksParentNodeDatabaseId = 'posts___nodes___blocks___parentNodeDatabaseId',
  PostsNodesBlocksSaveContent = 'posts___nodes___blocks___saveContent',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesContentTypeName = 'posts___nodes___contentTypeName',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  PostsNodesIsContentNode = 'posts___nodes___isContentNode',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesIsTermNode = 'posts___nodes___isTermNode',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesPreviewBlocks = 'posts___nodes___previewBlocks',
  PostsNodesPreviewBlocksJson = 'posts___nodes___previewBlocksJSON',
  PostsNodesPreviewBlocksAttributesJson = 'posts___nodes___previewBlocks___attributesJSON',
  PostsNodesPreviewBlocksDynamicContent = 'posts___nodes___previewBlocks___dynamicContent',
  PostsNodesPreviewBlocksInnerBlocks = 'posts___nodes___previewBlocks___innerBlocks',
  PostsNodesPreviewBlocksIsDynamic = 'posts___nodes___previewBlocks___isDynamic',
  PostsNodesPreviewBlocksName = 'posts___nodes___previewBlocks___name',
  PostsNodesPreviewBlocksOrder = 'posts___nodes___previewBlocks___order',
  PostsNodesPreviewBlocksOriginalContent = 'posts___nodes___previewBlocks___originalContent',
  PostsNodesPreviewBlocksParentNodeDatabaseId = 'posts___nodes___previewBlocks___parentNodeDatabaseId',
  PostsNodesPreviewBlocksSaveContent = 'posts___nodes___previewBlocks___saveContent',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  Slug = 'slug',
  TaxonomyName = 'taxonomyName',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri'
}

export type WpPostFormatFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpPostFormatToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpPostFormatToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpPostFormatToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpPostFormatFilterListInput = {
  elemMatch?: InputMaybe<WpPostFormatFilterInput>;
};

export type WpPostFormatGroupConnection = {
  __typename?: 'WpPostFormatGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPostFormatEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpPostFormatGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPostFormat>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPostFormatGroupConnectionDistinctArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionGroupArgs = {
  field: WpPostFormatFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPostFormatGroupConnectionMaxArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionMinArgs = {
  field: WpPostFormatFieldsEnum;
};


export type WpPostFormatGroupConnectionSumArgs = {
  field: WpPostFormatFieldsEnum;
};

export type WpPostFormatSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPostFormatFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the postFormat type and the ContentNode type */
export type WpPostFormatToContentNodeConnection = {
  __typename?: 'WpPostFormatToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpPostFormatToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the postFormat type and the post type */
export type WpPostFormatToPostConnection = {
  __typename?: 'WpPostFormatToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpPostFormatToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

/** Connection between the postFormat type and the Taxonomy type */
export type WpPostFormatToTaxonomyConnectionEdge = {
  __typename?: 'WpPostFormatToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpPostFormatToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpPostGroupConnection = {
  __typename?: 'WpPostGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpPostEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpPostGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpPost>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpPostGroupConnectionDistinctArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionGroupArgs = {
  field: WpPostFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpPostGroupConnectionMaxArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionMinArgs = {
  field: WpPostFieldsEnum;
};


export type WpPostGroupConnectionSumArgs = {
  field: WpPostFieldsEnum;
};

export type WpPostSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpPostFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the post type and the category type */
export type WpPostToCategoryConnection = {
  __typename?: 'WpPostToCategoryConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpCategory>>>;
};

export type WpPostToCategoryConnectionFilterInput = {
  nodes?: InputMaybe<WpCategoryFilterListInput>;
};

/** Connection between the post type and the Comment type */
export type WpPostToCommentConnection = {
  __typename?: 'WpPostToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpPostToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

/** Connection between the post type and the postFormat type */
export type WpPostToPostFormatConnection = {
  __typename?: 'WpPostToPostFormatConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPostFormat>>>;
};

export type WpPostToPostFormatConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFormatFilterListInput>;
};

/** Connection between the post type and the tag type */
export type WpPostToTagConnection = {
  __typename?: 'WpPostToTagConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTag>>>;
};

export type WpPostToTagConnectionFilterInput = {
  nodes?: InputMaybe<WpTagFilterListInput>;
};

/** Connection between the post type and the TermNode type */
export type WpPostToTermNodeConnection = {
  __typename?: 'WpPostToTermNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpTermNode>>>;
};

export type WpPostToTermNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpTermNodeFilterListInput>;
};

/** Details for labels of the PostType */
export type WpPostTypeLabelDetails = {
  __typename?: 'WpPostTypeLabelDetails';
  /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
  addNew?: Maybe<Scalars['String']>;
  /** Label for adding a new singular item. */
  addNewItem?: Maybe<Scalars['String']>;
  /** Label to signify all items in a submenu link. */
  allItems?: Maybe<Scalars['String']>;
  /** Label for archives in nav menus */
  archives?: Maybe<Scalars['String']>;
  /** Label for the attributes meta box. */
  attributes?: Maybe<Scalars['String']>;
  /** Label for editing a singular item. */
  editItem?: Maybe<Scalars['String']>;
  /** Label for the Featured Image meta box title. */
  featuredImage?: Maybe<Scalars['String']>;
  /** Label for the table views hidden heading. */
  filterItemsList?: Maybe<Scalars['String']>;
  /** Label for the media frame button. */
  insertIntoItem?: Maybe<Scalars['String']>;
  /** Label for the table hidden heading. */
  itemsList?: Maybe<Scalars['String']>;
  /** Label for the table pagination hidden heading. */
  itemsListNavigation?: Maybe<Scalars['String']>;
  /** Label for the menu name. */
  menuName?: Maybe<Scalars['String']>;
  /** General name for the post type, usually plural. */
  name?: Maybe<Scalars['String']>;
  /** Label for the new item page title. */
  newItem?: Maybe<Scalars['String']>;
  /** Label used when no items are found. */
  notFound?: Maybe<Scalars['String']>;
  /** Label used when no items are in the trash. */
  notFoundInTrash?: Maybe<Scalars['String']>;
  /** Label used to prefix parents of hierarchical items. */
  parentItemColon?: Maybe<Scalars['String']>;
  /** Label for removing the featured image. */
  removeFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for searching plural items. */
  searchItems?: Maybe<Scalars['String']>;
  /** Label for setting the featured image. */
  setFeaturedImage?: Maybe<Scalars['String']>;
  /** Name for one object of this post type. */
  singularName?: Maybe<Scalars['String']>;
  /** Label for the media frame filter. */
  uploadedToThisItem?: Maybe<Scalars['String']>;
  /** Label in the media frame for using a featured image. */
  useFeaturedImage?: Maybe<Scalars['String']>;
  /** Label for viewing a singular item. */
  viewItem?: Maybe<Scalars['String']>;
  /** Label for viewing post type archives. */
  viewItems?: Maybe<Scalars['String']>;
};

export type WpPostTypeLabelDetailsFilterInput = {
  addNew?: InputMaybe<StringQueryOperatorInput>;
  addNewItem?: InputMaybe<StringQueryOperatorInput>;
  allItems?: InputMaybe<StringQueryOperatorInput>;
  archives?: InputMaybe<StringQueryOperatorInput>;
  attributes?: InputMaybe<StringQueryOperatorInput>;
  editItem?: InputMaybe<StringQueryOperatorInput>;
  featuredImage?: InputMaybe<StringQueryOperatorInput>;
  filterItemsList?: InputMaybe<StringQueryOperatorInput>;
  insertIntoItem?: InputMaybe<StringQueryOperatorInput>;
  itemsList?: InputMaybe<StringQueryOperatorInput>;
  itemsListNavigation?: InputMaybe<StringQueryOperatorInput>;
  menuName?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  newItem?: InputMaybe<StringQueryOperatorInput>;
  notFound?: InputMaybe<StringQueryOperatorInput>;
  notFoundInTrash?: InputMaybe<StringQueryOperatorInput>;
  parentItemColon?: InputMaybe<StringQueryOperatorInput>;
  removeFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  searchItems?: InputMaybe<StringQueryOperatorInput>;
  setFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  singularName?: InputMaybe<StringQueryOperatorInput>;
  uploadedToThisItem?: InputMaybe<StringQueryOperatorInput>;
  useFeaturedImage?: InputMaybe<StringQueryOperatorInput>;
  viewItem?: InputMaybe<StringQueryOperatorInput>;
  viewItems?: InputMaybe<StringQueryOperatorInput>;
};

/** The reading setting type */
export type WpReadingSettings = {
  __typename?: 'WpReadingSettings';
  /** Maximal angezeigte Beiträge. */
  postsPerPage?: Maybe<Scalars['Int']>;
};

export type WpReadingSettingsFilterInput = {
  postsPerPage?: InputMaybe<IntQueryOperatorInput>;
};

/** real-media-library/gallery block */
export type WpRealMediaLibraryGalleryBlock = WpBlock & {
  __typename?: 'WpRealMediaLibraryGalleryBlock';
  attributes?: Maybe<WpRealMediaLibraryGalleryBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpRealMediaLibraryGalleryBlockAttributes = {
  __typename?: 'WpRealMediaLibraryGalleryBlockAttributes';
  align?: Maybe<Scalars['String']>;
  captions: Scalars['Boolean'];
  className?: Maybe<Scalars['String']>;
  columns: Scalars['Float'];
  fid: Scalars['Float'];
  imageCrop: Scalars['Boolean'];
  lastEditReload: Scalars['Float'];
  linkTo: Scalars['String'];
  lock?: Maybe<Scalars['JSON']>;
};

/** The ReusableBlock type */
export type WpReusableBlock = Node & WpBlockEditorContentNode & WpContentNode & WpDatabaseIdentifier & WpNode & WpNodeWithContentEditor & WpNodeWithRevisions & WpNodeWithTemplate & WpNodeWithTitle & WpUniformResourceIdentifiable & {
  __typename?: 'WpReusableBlock';
  /** Gutenberg blocks */
  blocks?: Maybe<Array<WpBlock>>;
  /** Gutenberg blocks as json string */
  blocksJSON?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** The content of the post. */
  content?: Maybe<Scalars['String']>;
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<WpContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int'];
  /** Post publishing date. */
  date?: Maybe<Scalars['Date']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['Date']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<WpContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['Date']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['Date']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Previewed gutenberg blocks */
  previewBlocks?: Maybe<Array<WpBlock>>;
  /** Previewed Gutenberg blocks as json string */
  previewBlocksJSON?: Maybe<Scalars['String']>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']>;
  /** The template assigned to the node */
  template?: Maybe<WpContentTemplate>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockDateGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


/** The ReusableBlock type */
export type WpReusableBlockModifiedGmtArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type WpReusableBlockConnection = {
  __typename?: 'WpReusableBlockConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpReusableBlockEdge>;
  group: Array<WpReusableBlockGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpReusableBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpReusableBlockConnectionDistinctArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockConnectionGroupArgs = {
  field: WpReusableBlockFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpReusableBlockConnectionMaxArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockConnectionMinArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockConnectionSumArgs = {
  field: WpReusableBlockFieldsEnum;
};

export type WpReusableBlockEdge = {
  __typename?: 'WpReusableBlockEdge';
  next?: Maybe<WpReusableBlock>;
  node: WpReusableBlock;
  previous?: Maybe<WpReusableBlock>;
};

export enum WpReusableBlockFieldsEnum {
  Blocks = 'blocks',
  BlocksJson = 'blocksJSON',
  BlocksAttributesJson = 'blocks___attributesJSON',
  BlocksDynamicContent = 'blocks___dynamicContent',
  BlocksInnerBlocks = 'blocks___innerBlocks',
  BlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksAttributesJson = 'blocks___innerBlocks___innerBlocks___attributesJSON',
  BlocksInnerBlocksInnerBlocksDynamicContent = 'blocks___innerBlocks___innerBlocks___dynamicContent',
  BlocksInnerBlocksInnerBlocksInnerBlocks = 'blocks___innerBlocks___innerBlocks___innerBlocks',
  BlocksInnerBlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___innerBlocks___isDynamic',
  BlocksInnerBlocksInnerBlocksName = 'blocks___innerBlocks___innerBlocks___name',
  BlocksInnerBlocksInnerBlocksOrder = 'blocks___innerBlocks___innerBlocks___order',
  BlocksInnerBlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___innerBlocks___originalContent',
  BlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksInnerBlocksSaveContent = 'blocks___innerBlocks___innerBlocks___saveContent',
  BlocksInnerBlocksIsDynamic = 'blocks___innerBlocks___isDynamic',
  BlocksInnerBlocksName = 'blocks___innerBlocks___name',
  BlocksInnerBlocksOrder = 'blocks___innerBlocks___order',
  BlocksInnerBlocksOriginalContent = 'blocks___innerBlocks___originalContent',
  BlocksInnerBlocksParentNodeDatabaseId = 'blocks___innerBlocks___parentNodeDatabaseId',
  BlocksInnerBlocksParentNodeId = 'blocks___innerBlocks___parentNode___id',
  BlocksInnerBlocksSaveContent = 'blocks___innerBlocks___saveContent',
  BlocksIsDynamic = 'blocks___isDynamic',
  BlocksName = 'blocks___name',
  BlocksOrder = 'blocks___order',
  BlocksOriginalContent = 'blocks___originalContent',
  BlocksParentNodeDatabaseId = 'blocks___parentNodeDatabaseId',
  BlocksParentNodeId = 'blocks___parentNode___id',
  BlocksSaveContent = 'blocks___saveContent',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Content = 'content',
  ContentTypeName = 'contentTypeName',
  ContentTypeNodeArchivePath = 'contentType___node___archivePath',
  ContentTypeNodeCanExport = 'contentType___node___canExport',
  ContentTypeNodeChildren = 'contentType___node___children',
  ContentTypeNodeChildrenChildren = 'contentType___node___children___children',
  ContentTypeNodeChildrenId = 'contentType___node___children___id',
  ContentTypeNodeConnectedTaxonomiesNodes = 'contentType___node___connectedTaxonomies___nodes',
  ContentTypeNodeContentNodesNodes = 'contentType___node___contentNodes___nodes',
  ContentTypeNodeDeleteWithUser = 'contentType___node___deleteWithUser',
  ContentTypeNodeDescription = 'contentType___node___description',
  ContentTypeNodeExcludeFromSearch = 'contentType___node___excludeFromSearch',
  ContentTypeNodeGraphqlPluralName = 'contentType___node___graphqlPluralName',
  ContentTypeNodeGraphqlSingleName = 'contentType___node___graphqlSingleName',
  ContentTypeNodeHasArchive = 'contentType___node___hasArchive',
  ContentTypeNodeHierarchical = 'contentType___node___hierarchical',
  ContentTypeNodeId = 'contentType___node___id',
  ContentTypeNodeInternalContent = 'contentType___node___internal___content',
  ContentTypeNodeInternalContentDigest = 'contentType___node___internal___contentDigest',
  ContentTypeNodeInternalDescription = 'contentType___node___internal___description',
  ContentTypeNodeInternalFieldOwners = 'contentType___node___internal___fieldOwners',
  ContentTypeNodeInternalIgnoreType = 'contentType___node___internal___ignoreType',
  ContentTypeNodeInternalMediaType = 'contentType___node___internal___mediaType',
  ContentTypeNodeInternalOwner = 'contentType___node___internal___owner',
  ContentTypeNodeInternalType = 'contentType___node___internal___type',
  ContentTypeNodeIsContentNode = 'contentType___node___isContentNode',
  ContentTypeNodeIsFrontPage = 'contentType___node___isFrontPage',
  ContentTypeNodeIsPostsPage = 'contentType___node___isPostsPage',
  ContentTypeNodeIsTermNode = 'contentType___node___isTermNode',
  ContentTypeNodeLabel = 'contentType___node___label',
  ContentTypeNodeLabelsAddNew = 'contentType___node___labels___addNew',
  ContentTypeNodeLabelsAddNewItem = 'contentType___node___labels___addNewItem',
  ContentTypeNodeLabelsAllItems = 'contentType___node___labels___allItems',
  ContentTypeNodeLabelsArchives = 'contentType___node___labels___archives',
  ContentTypeNodeLabelsAttributes = 'contentType___node___labels___attributes',
  ContentTypeNodeLabelsEditItem = 'contentType___node___labels___editItem',
  ContentTypeNodeLabelsFeaturedImage = 'contentType___node___labels___featuredImage',
  ContentTypeNodeLabelsFilterItemsList = 'contentType___node___labels___filterItemsList',
  ContentTypeNodeLabelsInsertIntoItem = 'contentType___node___labels___insertIntoItem',
  ContentTypeNodeLabelsItemsList = 'contentType___node___labels___itemsList',
  ContentTypeNodeLabelsItemsListNavigation = 'contentType___node___labels___itemsListNavigation',
  ContentTypeNodeLabelsMenuName = 'contentType___node___labels___menuName',
  ContentTypeNodeLabelsName = 'contentType___node___labels___name',
  ContentTypeNodeLabelsNewItem = 'contentType___node___labels___newItem',
  ContentTypeNodeLabelsNotFound = 'contentType___node___labels___notFound',
  ContentTypeNodeLabelsNotFoundInTrash = 'contentType___node___labels___notFoundInTrash',
  ContentTypeNodeLabelsParentItemColon = 'contentType___node___labels___parentItemColon',
  ContentTypeNodeLabelsRemoveFeaturedImage = 'contentType___node___labels___removeFeaturedImage',
  ContentTypeNodeLabelsSearchItems = 'contentType___node___labels___searchItems',
  ContentTypeNodeLabelsSetFeaturedImage = 'contentType___node___labels___setFeaturedImage',
  ContentTypeNodeLabelsSingularName = 'contentType___node___labels___singularName',
  ContentTypeNodeLabelsUploadedToThisItem = 'contentType___node___labels___uploadedToThisItem',
  ContentTypeNodeLabelsUseFeaturedImage = 'contentType___node___labels___useFeaturedImage',
  ContentTypeNodeLabelsViewItem = 'contentType___node___labels___viewItem',
  ContentTypeNodeLabelsViewItems = 'contentType___node___labels___viewItems',
  ContentTypeNodeMenuIcon = 'contentType___node___menuIcon',
  ContentTypeNodeMenuPosition = 'contentType___node___menuPosition',
  ContentTypeNodeName = 'contentType___node___name',
  ContentTypeNodeNodeType = 'contentType___node___nodeType',
  ContentTypeNodeParentChildren = 'contentType___node___parent___children',
  ContentTypeNodeParentId = 'contentType___node___parent___id',
  ContentTypeNodePublic = 'contentType___node___public',
  ContentTypeNodePubliclyQueryable = 'contentType___node___publiclyQueryable',
  ContentTypeNodeRestBase = 'contentType___node___restBase',
  ContentTypeNodeRestControllerClass = 'contentType___node___restControllerClass',
  ContentTypeNodeShowInAdminBar = 'contentType___node___showInAdminBar',
  ContentTypeNodeShowInGraphql = 'contentType___node___showInGraphql',
  ContentTypeNodeShowInMenu = 'contentType___node___showInMenu',
  ContentTypeNodeShowInNavMenus = 'contentType___node___showInNavMenus',
  ContentTypeNodeShowInRest = 'contentType___node___showInRest',
  ContentTypeNodeShowUi = 'contentType___node___showUi',
  ContentTypeNodeUri = 'contentType___node___uri',
  DatabaseId = 'databaseId',
  Date = 'date',
  DateGmt = 'dateGmt',
  DesiredSlug = 'desiredSlug',
  Enclosure = 'enclosure',
  Guid = 'guid',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsRevision = 'isRevision',
  IsTermNode = 'isTermNode',
  LastEditedByNodeAvatarDefault = 'lastEditedBy___node___avatar___default',
  LastEditedByNodeAvatarExtraAttr = 'lastEditedBy___node___avatar___extraAttr',
  LastEditedByNodeAvatarForceDefault = 'lastEditedBy___node___avatar___forceDefault',
  LastEditedByNodeAvatarFoundAvatar = 'lastEditedBy___node___avatar___foundAvatar',
  LastEditedByNodeAvatarHeight = 'lastEditedBy___node___avatar___height',
  LastEditedByNodeAvatarRating = 'lastEditedBy___node___avatar___rating',
  LastEditedByNodeAvatarScheme = 'lastEditedBy___node___avatar___scheme',
  LastEditedByNodeAvatarSize = 'lastEditedBy___node___avatar___size',
  LastEditedByNodeAvatarUrl = 'lastEditedBy___node___avatar___url',
  LastEditedByNodeAvatarWidth = 'lastEditedBy___node___avatar___width',
  LastEditedByNodeBlockEditorPreviewsNodes = 'lastEditedBy___node___blockEditorPreviews___nodes',
  LastEditedByNodeCapKey = 'lastEditedBy___node___capKey',
  LastEditedByNodeCapabilities = 'lastEditedBy___node___capabilities',
  LastEditedByNodeChildren = 'lastEditedBy___node___children',
  LastEditedByNodeChildrenChildren = 'lastEditedBy___node___children___children',
  LastEditedByNodeChildrenId = 'lastEditedBy___node___children___id',
  LastEditedByNodeCommentsNodes = 'lastEditedBy___node___comments___nodes',
  LastEditedByNodeDatabaseId = 'lastEditedBy___node___databaseId',
  LastEditedByNodeDescription = 'lastEditedBy___node___description',
  LastEditedByNodeEmail = 'lastEditedBy___node___email',
  LastEditedByNodeExtraCapabilities = 'lastEditedBy___node___extraCapabilities',
  LastEditedByNodeFirstName = 'lastEditedBy___node___firstName',
  LastEditedByNodeId = 'lastEditedBy___node___id',
  LastEditedByNodeInternalContent = 'lastEditedBy___node___internal___content',
  LastEditedByNodeInternalContentDigest = 'lastEditedBy___node___internal___contentDigest',
  LastEditedByNodeInternalDescription = 'lastEditedBy___node___internal___description',
  LastEditedByNodeInternalFieldOwners = 'lastEditedBy___node___internal___fieldOwners',
  LastEditedByNodeInternalIgnoreType = 'lastEditedBy___node___internal___ignoreType',
  LastEditedByNodeInternalMediaType = 'lastEditedBy___node___internal___mediaType',
  LastEditedByNodeInternalOwner = 'lastEditedBy___node___internal___owner',
  LastEditedByNodeInternalType = 'lastEditedBy___node___internal___type',
  LastEditedByNodeIsContentNode = 'lastEditedBy___node___isContentNode',
  LastEditedByNodeIsTermNode = 'lastEditedBy___node___isTermNode',
  LastEditedByNodeLastName = 'lastEditedBy___node___lastName',
  LastEditedByNodeLocale = 'lastEditedBy___node___locale',
  LastEditedByNodeName = 'lastEditedBy___node___name',
  LastEditedByNodeNicename = 'lastEditedBy___node___nicename',
  LastEditedByNodeNickname = 'lastEditedBy___node___nickname',
  LastEditedByNodeNodeType = 'lastEditedBy___node___nodeType',
  LastEditedByNodePagesNodes = 'lastEditedBy___node___pages___nodes',
  LastEditedByNodeParentChildren = 'lastEditedBy___node___parent___children',
  LastEditedByNodeParentId = 'lastEditedBy___node___parent___id',
  LastEditedByNodePostsNodes = 'lastEditedBy___node___posts___nodes',
  LastEditedByNodeRegisteredDate = 'lastEditedBy___node___registeredDate',
  LastEditedByNodeRolesNodes = 'lastEditedBy___node___roles___nodes',
  LastEditedByNodeSlug = 'lastEditedBy___node___slug',
  LastEditedByNodeUri = 'lastEditedBy___node___uri',
  LastEditedByNodeUrl = 'lastEditedBy___node___url',
  LastEditedByNodeUsername = 'lastEditedBy___node___username',
  Link = 'link',
  Modified = 'modified',
  ModifiedGmt = 'modifiedGmt',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreviewBlocks = 'previewBlocks',
  PreviewBlocksJson = 'previewBlocksJSON',
  PreviewBlocksAttributesJson = 'previewBlocks___attributesJSON',
  PreviewBlocksDynamicContent = 'previewBlocks___dynamicContent',
  PreviewBlocksInnerBlocks = 'previewBlocks___innerBlocks',
  PreviewBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksAttributesJson = 'previewBlocks___innerBlocks___innerBlocks___attributesJSON',
  PreviewBlocksInnerBlocksInnerBlocksDynamicContent = 'previewBlocks___innerBlocks___innerBlocks___dynamicContent',
  PreviewBlocksInnerBlocksInnerBlocksInnerBlocks = 'previewBlocks___innerBlocks___innerBlocks___innerBlocks',
  PreviewBlocksInnerBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksInnerBlocksName = 'previewBlocks___innerBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___innerBlocks___saveContent',
  PreviewBlocksInnerBlocksIsDynamic = 'previewBlocks___innerBlocks___isDynamic',
  PreviewBlocksInnerBlocksName = 'previewBlocks___innerBlocks___name',
  PreviewBlocksInnerBlocksOrder = 'previewBlocks___innerBlocks___order',
  PreviewBlocksInnerBlocksOriginalContent = 'previewBlocks___innerBlocks___originalContent',
  PreviewBlocksInnerBlocksParentNodeDatabaseId = 'previewBlocks___innerBlocks___parentNodeDatabaseId',
  PreviewBlocksInnerBlocksParentNodeId = 'previewBlocks___innerBlocks___parentNode___id',
  PreviewBlocksInnerBlocksSaveContent = 'previewBlocks___innerBlocks___saveContent',
  PreviewBlocksIsDynamic = 'previewBlocks___isDynamic',
  PreviewBlocksName = 'previewBlocks___name',
  PreviewBlocksOrder = 'previewBlocks___order',
  PreviewBlocksOriginalContent = 'previewBlocks___originalContent',
  PreviewBlocksParentNodeDatabaseId = 'previewBlocks___parentNodeDatabaseId',
  PreviewBlocksParentNodeId = 'previewBlocks___parentNode___id',
  PreviewBlocksSaveContent = 'previewBlocks___saveContent',
  Slug = 'slug',
  Status = 'status',
  TemplateTemplateName = 'template___templateName',
  Title = 'title',
  Uri = 'uri'
}

export type WpReusableBlockFilterInput = {
  blocks?: InputMaybe<WpBlockFilterListInput>;
  blocksJSON?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  content?: InputMaybe<StringQueryOperatorInput>;
  contentType?: InputMaybe<WpContentNodeToContentTypeConnectionEdgeFilterInput>;
  contentTypeName?: InputMaybe<StringQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  dateGmt?: InputMaybe<DateQueryOperatorInput>;
  desiredSlug?: InputMaybe<StringQueryOperatorInput>;
  enclosure?: InputMaybe<StringQueryOperatorInput>;
  guid?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isRevision?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastEditedBy?: InputMaybe<WpContentNodeToEditLastConnectionEdgeFilterInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modifiedGmt?: InputMaybe<DateQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previewBlocks?: InputMaybe<WpBlockFilterListInput>;
  previewBlocksJSON?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  template?: InputMaybe<WpContentTemplateFilterInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpReusableBlockGroupConnection = {
  __typename?: 'WpReusableBlockGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpReusableBlockEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpReusableBlockGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpReusableBlock>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpReusableBlockGroupConnectionDistinctArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockGroupConnectionGroupArgs = {
  field: WpReusableBlockFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpReusableBlockGroupConnectionMaxArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockGroupConnectionMinArgs = {
  field: WpReusableBlockFieldsEnum;
};


export type WpReusableBlockGroupConnectionSumArgs = {
  field: WpReusableBlockFieldsEnum;
};

export type WpReusableBlockSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpReusableBlockFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** All of the registered settings */
export type WpSettings = {
  __typename?: 'WpSettings';
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDateFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsDescription?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsEmail?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsLanguage?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTimezone?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsTitle?: Maybe<Scalars['String']>;
  /** Settings of the the string Settings Group */
  generalSettingsUrl?: Maybe<Scalars['String']>;
  /** Settings of the the integer Settings Group */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>;
  /** Settings of the the integer Settings Group */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>;
  /** Settings of the the string Settings Group */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>;
  /** Settings of the the boolean Settings Group */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpSettingsFilterInput = {
  discussionSettingsDefaultCommentStatus?: InputMaybe<StringQueryOperatorInput>;
  discussionSettingsDefaultPingStatus?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDateFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsDescription?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsEmail?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsLanguage?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsStartOfWeek?: InputMaybe<IntQueryOperatorInput>;
  generalSettingsTimeFormat?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTimezone?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsTitle?: InputMaybe<StringQueryOperatorInput>;
  generalSettingsUrl?: InputMaybe<StringQueryOperatorInput>;
  readingSettingsPostsPerPage?: InputMaybe<IntQueryOperatorInput>;
  writingSettingsDefaultCategory?: InputMaybe<IntQueryOperatorInput>;
  writingSettingsDefaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  writingSettingsUseSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** tadv/classic-paragraph block */
export type WpTadvClassicParagraphBlock = WpBlock & {
  __typename?: 'WpTadvClassicParagraphBlock';
  attributes?: Maybe<WpTadvClassicParagraphBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpTadvClassicParagraphBlockAttributes = {
  __typename?: 'WpTadvClassicParagraphBlockAttributes';
  align?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

/** The tag type */
export type WpTag = Node & WpDatabaseIdentifier & WpMenuItemLinkable & WpNode & WpTermNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpTag';
  children: Array<Node>;
  /** Connection between the tag type and the ContentNode type */
  contentNodes?: Maybe<WpTagToContentNodeConnection>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Connection between the tag type and the post type */
  posts?: Maybe<WpTagToPostConnection>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** Connection between the tag type and the Taxonomy type */
  taxonomy?: Maybe<WpTagToTaxonomyConnectionEdge>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpTagConnection = {
  __typename?: 'WpTagConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTagEdge>;
  group: Array<WpTagGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTagConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionGroupArgs = {
  field: WpTagFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTagConnectionMaxArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionMinArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagConnectionSumArgs = {
  field: WpTagFieldsEnum;
};

export type WpTagEdge = {
  __typename?: 'WpTagEdge';
  next?: Maybe<WpTag>;
  node: WpTag;
  previous?: Maybe<WpTag>;
};

export enum WpTagFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ContentNodesNodes = 'contentNodes___nodes',
  ContentNodesNodesChildren = 'contentNodes___nodes___children',
  ContentNodesNodesChildrenChildren = 'contentNodes___nodes___children___children',
  ContentNodesNodesChildrenId = 'contentNodes___nodes___children___id',
  ContentNodesNodesContentTypeName = 'contentNodes___nodes___contentTypeName',
  ContentNodesNodesDatabaseId = 'contentNodes___nodes___databaseId',
  ContentNodesNodesDate = 'contentNodes___nodes___date',
  ContentNodesNodesDateGmt = 'contentNodes___nodes___dateGmt',
  ContentNodesNodesDesiredSlug = 'contentNodes___nodes___desiredSlug',
  ContentNodesNodesEnclosure = 'contentNodes___nodes___enclosure',
  ContentNodesNodesGuid = 'contentNodes___nodes___guid',
  ContentNodesNodesId = 'contentNodes___nodes___id',
  ContentNodesNodesInternalContent = 'contentNodes___nodes___internal___content',
  ContentNodesNodesInternalContentDigest = 'contentNodes___nodes___internal___contentDigest',
  ContentNodesNodesInternalDescription = 'contentNodes___nodes___internal___description',
  ContentNodesNodesInternalFieldOwners = 'contentNodes___nodes___internal___fieldOwners',
  ContentNodesNodesInternalIgnoreType = 'contentNodes___nodes___internal___ignoreType',
  ContentNodesNodesInternalMediaType = 'contentNodes___nodes___internal___mediaType',
  ContentNodesNodesInternalOwner = 'contentNodes___nodes___internal___owner',
  ContentNodesNodesInternalType = 'contentNodes___nodes___internal___type',
  ContentNodesNodesIsContentNode = 'contentNodes___nodes___isContentNode',
  ContentNodesNodesIsTermNode = 'contentNodes___nodes___isTermNode',
  ContentNodesNodesLink = 'contentNodes___nodes___link',
  ContentNodesNodesModified = 'contentNodes___nodes___modified',
  ContentNodesNodesModifiedGmt = 'contentNodes___nodes___modifiedGmt',
  ContentNodesNodesNodeType = 'contentNodes___nodes___nodeType',
  ContentNodesNodesParentChildren = 'contentNodes___nodes___parent___children',
  ContentNodesNodesParentId = 'contentNodes___nodes___parent___id',
  ContentNodesNodesSlug = 'contentNodes___nodes___slug',
  ContentNodesNodesStatus = 'contentNodes___nodes___status',
  ContentNodesNodesTemplateTemplateName = 'contentNodes___nodes___template___templateName',
  ContentNodesNodesUri = 'contentNodes___nodes___uri',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  Link = 'link',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesBlocks = 'posts___nodes___blocks',
  PostsNodesBlocksJson = 'posts___nodes___blocksJSON',
  PostsNodesBlocksAttributesJson = 'posts___nodes___blocks___attributesJSON',
  PostsNodesBlocksDynamicContent = 'posts___nodes___blocks___dynamicContent',
  PostsNodesBlocksInnerBlocks = 'posts___nodes___blocks___innerBlocks',
  PostsNodesBlocksIsDynamic = 'posts___nodes___blocks___isDynamic',
  PostsNodesBlocksName = 'posts___nodes___blocks___name',
  PostsNodesBlocksOrder = 'posts___nodes___blocks___order',
  PostsNodesBlocksOriginalContent = 'posts___nodes___blocks___originalContent',
  PostsNodesBlocksParentNodeDatabaseId = 'posts___nodes___blocks___parentNodeDatabaseId',
  PostsNodesBlocksSaveContent = 'posts___nodes___blocks___saveContent',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesContentTypeName = 'posts___nodes___contentTypeName',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  PostsNodesIsContentNode = 'posts___nodes___isContentNode',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesIsTermNode = 'posts___nodes___isTermNode',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesPreviewBlocks = 'posts___nodes___previewBlocks',
  PostsNodesPreviewBlocksJson = 'posts___nodes___previewBlocksJSON',
  PostsNodesPreviewBlocksAttributesJson = 'posts___nodes___previewBlocks___attributesJSON',
  PostsNodesPreviewBlocksDynamicContent = 'posts___nodes___previewBlocks___dynamicContent',
  PostsNodesPreviewBlocksInnerBlocks = 'posts___nodes___previewBlocks___innerBlocks',
  PostsNodesPreviewBlocksIsDynamic = 'posts___nodes___previewBlocks___isDynamic',
  PostsNodesPreviewBlocksName = 'posts___nodes___previewBlocks___name',
  PostsNodesPreviewBlocksOrder = 'posts___nodes___previewBlocks___order',
  PostsNodesPreviewBlocksOriginalContent = 'posts___nodes___previewBlocks___originalContent',
  PostsNodesPreviewBlocksParentNodeDatabaseId = 'posts___nodes___previewBlocks___parentNodeDatabaseId',
  PostsNodesPreviewBlocksSaveContent = 'posts___nodes___previewBlocks___saveContent',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  Slug = 'slug',
  TaxonomyName = 'taxonomyName',
  TaxonomyNodeArchivePath = 'taxonomy___node___archivePath',
  TaxonomyNodeChildren = 'taxonomy___node___children',
  TaxonomyNodeChildrenChildren = 'taxonomy___node___children___children',
  TaxonomyNodeChildrenId = 'taxonomy___node___children___id',
  TaxonomyNodeConnectedContentTypesNodes = 'taxonomy___node___connectedContentTypes___nodes',
  TaxonomyNodeDescription = 'taxonomy___node___description',
  TaxonomyNodeGraphqlPluralName = 'taxonomy___node___graphqlPluralName',
  TaxonomyNodeGraphqlSingleName = 'taxonomy___node___graphqlSingleName',
  TaxonomyNodeHierarchical = 'taxonomy___node___hierarchical',
  TaxonomyNodeId = 'taxonomy___node___id',
  TaxonomyNodeInternalContent = 'taxonomy___node___internal___content',
  TaxonomyNodeInternalContentDigest = 'taxonomy___node___internal___contentDigest',
  TaxonomyNodeInternalDescription = 'taxonomy___node___internal___description',
  TaxonomyNodeInternalFieldOwners = 'taxonomy___node___internal___fieldOwners',
  TaxonomyNodeInternalIgnoreType = 'taxonomy___node___internal___ignoreType',
  TaxonomyNodeInternalMediaType = 'taxonomy___node___internal___mediaType',
  TaxonomyNodeInternalOwner = 'taxonomy___node___internal___owner',
  TaxonomyNodeInternalType = 'taxonomy___node___internal___type',
  TaxonomyNodeLabel = 'taxonomy___node___label',
  TaxonomyNodeName = 'taxonomy___node___name',
  TaxonomyNodeNodeType = 'taxonomy___node___nodeType',
  TaxonomyNodeParentChildren = 'taxonomy___node___parent___children',
  TaxonomyNodeParentId = 'taxonomy___node___parent___id',
  TaxonomyNodePublic = 'taxonomy___node___public',
  TaxonomyNodeRestBase = 'taxonomy___node___restBase',
  TaxonomyNodeRestControllerClass = 'taxonomy___node___restControllerClass',
  TaxonomyNodeShowCloud = 'taxonomy___node___showCloud',
  TaxonomyNodeShowInAdminColumn = 'taxonomy___node___showInAdminColumn',
  TaxonomyNodeShowInGraphql = 'taxonomy___node___showInGraphql',
  TaxonomyNodeShowInMenu = 'taxonomy___node___showInMenu',
  TaxonomyNodeShowInNavMenus = 'taxonomy___node___showInNavMenus',
  TaxonomyNodeShowInQuickEdit = 'taxonomy___node___showInQuickEdit',
  TaxonomyNodeShowInRest = 'taxonomy___node___showInRest',
  TaxonomyNodeShowUi = 'taxonomy___node___showUi',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri'
}

export type WpTagFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  contentNodes?: InputMaybe<WpTagToContentNodeConnectionFilterInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpTagToPostConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<WpTagToTaxonomyConnectionEdgeFilterInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTagFilterListInput = {
  elemMatch?: InputMaybe<WpTagFilterInput>;
};

export type WpTagGroupConnection = {
  __typename?: 'WpTagGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTagEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpTagGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTag>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTagGroupConnectionDistinctArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionGroupArgs = {
  field: WpTagFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTagGroupConnectionMaxArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionMinArgs = {
  field: WpTagFieldsEnum;
};


export type WpTagGroupConnectionSumArgs = {
  field: WpTagFieldsEnum;
};

export type WpTagSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTagFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the tag type and the ContentNode type */
export type WpTagToContentNodeConnection = {
  __typename?: 'WpTagToContentNodeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentNode>>>;
};

export type WpTagToContentNodeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentNodeFilterListInput>;
};

/** Connection between the tag type and the post type */
export type WpTagToPostConnection = {
  __typename?: 'WpTagToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpTagToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

/** Connection between the tag type and the Taxonomy type */
export type WpTagToTaxonomyConnectionEdge = {
  __typename?: 'WpTagToTaxonomyConnectionEdge';
  /** The node of the connection, without the edges */
  node?: Maybe<WpTaxonomy>;
};

export type WpTagToTaxonomyConnectionEdgeFilterInput = {
  node?: InputMaybe<WpTaxonomyFilterInput>;
};

/** A taxonomy object */
export type WpTaxonomy = Node & WpNode & {
  __typename?: 'WpTaxonomy';
  /** The url path of the first page of the archive page for this content type. */
  archivePath?: Maybe<Scalars['String']>;
  children: Array<Node>;
  /** List of Content Types associated with the Taxonomy */
  connectedContentTypes?: Maybe<WpTaxonomyToContentTypeConnection>;
  /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
  description?: Maybe<Scalars['String']>;
  /** The plural name of the post type within the GraphQL Schema. */
  graphqlPluralName?: Maybe<Scalars['String']>;
  /** The singular name of the post type within the GraphQL Schema. */
  graphqlSingleName?: Maybe<Scalars['String']>;
  /** Whether the taxonomy is hierarchical */
  hierarchical?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Name of the taxonomy shown in the menu. Usually plural. */
  label?: Maybe<Scalars['String']>;
  /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** Whether the taxonomy is publicly queryable */
  public?: Maybe<Scalars['Boolean']>;
  /** Name of content type to diplay in REST API &quot;wp/v2&quot; namespace. */
  restBase?: Maybe<Scalars['String']>;
  /** The REST Controller class assigned to handling this content type. */
  restControllerClass?: Maybe<Scalars['String']>;
  /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
  showCloud?: Maybe<Scalars['Boolean']>;
  /** Whether to display a column for the taxonomy on its post type listing screens. */
  showInAdminColumn?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type to the GraphQL Schema. */
  showInGraphql?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the admin menu */
  showInMenu?: Maybe<Scalars['Boolean']>;
  /** Whether the taxonomy is available for selection in navigation menus. */
  showInNavMenus?: Maybe<Scalars['Boolean']>;
  /** Whether to show the taxonomy in the quick/bulk edit panel. */
  showInQuickEdit?: Maybe<Scalars['Boolean']>;
  /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
  showInRest?: Maybe<Scalars['Boolean']>;
  /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
  showUi?: Maybe<Scalars['Boolean']>;
};

export type WpTaxonomyConnection = {
  __typename?: 'WpTaxonomyConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTaxonomyEdge>;
  group: Array<WpTaxonomyGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTaxonomyConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionGroupArgs = {
  field: WpTaxonomyFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTaxonomyConnectionMaxArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionMinArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyConnectionSumArgs = {
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomyEdge = {
  __typename?: 'WpTaxonomyEdge';
  next?: Maybe<WpTaxonomy>;
  node: WpTaxonomy;
  previous?: Maybe<WpTaxonomy>;
};

export enum WpTaxonomyFieldsEnum {
  ArchivePath = 'archivePath',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  ConnectedContentTypesNodes = 'connectedContentTypes___nodes',
  ConnectedContentTypesNodesArchivePath = 'connectedContentTypes___nodes___archivePath',
  ConnectedContentTypesNodesCanExport = 'connectedContentTypes___nodes___canExport',
  ConnectedContentTypesNodesChildren = 'connectedContentTypes___nodes___children',
  ConnectedContentTypesNodesChildrenChildren = 'connectedContentTypes___nodes___children___children',
  ConnectedContentTypesNodesChildrenId = 'connectedContentTypes___nodes___children___id',
  ConnectedContentTypesNodesConnectedTaxonomiesNodes = 'connectedContentTypes___nodes___connectedTaxonomies___nodes',
  ConnectedContentTypesNodesContentNodesNodes = 'connectedContentTypes___nodes___contentNodes___nodes',
  ConnectedContentTypesNodesDeleteWithUser = 'connectedContentTypes___nodes___deleteWithUser',
  ConnectedContentTypesNodesDescription = 'connectedContentTypes___nodes___description',
  ConnectedContentTypesNodesExcludeFromSearch = 'connectedContentTypes___nodes___excludeFromSearch',
  ConnectedContentTypesNodesGraphqlPluralName = 'connectedContentTypes___nodes___graphqlPluralName',
  ConnectedContentTypesNodesGraphqlSingleName = 'connectedContentTypes___nodes___graphqlSingleName',
  ConnectedContentTypesNodesHasArchive = 'connectedContentTypes___nodes___hasArchive',
  ConnectedContentTypesNodesHierarchical = 'connectedContentTypes___nodes___hierarchical',
  ConnectedContentTypesNodesId = 'connectedContentTypes___nodes___id',
  ConnectedContentTypesNodesInternalContent = 'connectedContentTypes___nodes___internal___content',
  ConnectedContentTypesNodesInternalContentDigest = 'connectedContentTypes___nodes___internal___contentDigest',
  ConnectedContentTypesNodesInternalDescription = 'connectedContentTypes___nodes___internal___description',
  ConnectedContentTypesNodesInternalFieldOwners = 'connectedContentTypes___nodes___internal___fieldOwners',
  ConnectedContentTypesNodesInternalIgnoreType = 'connectedContentTypes___nodes___internal___ignoreType',
  ConnectedContentTypesNodesInternalMediaType = 'connectedContentTypes___nodes___internal___mediaType',
  ConnectedContentTypesNodesInternalOwner = 'connectedContentTypes___nodes___internal___owner',
  ConnectedContentTypesNodesInternalType = 'connectedContentTypes___nodes___internal___type',
  ConnectedContentTypesNodesIsContentNode = 'connectedContentTypes___nodes___isContentNode',
  ConnectedContentTypesNodesIsFrontPage = 'connectedContentTypes___nodes___isFrontPage',
  ConnectedContentTypesNodesIsPostsPage = 'connectedContentTypes___nodes___isPostsPage',
  ConnectedContentTypesNodesIsTermNode = 'connectedContentTypes___nodes___isTermNode',
  ConnectedContentTypesNodesLabel = 'connectedContentTypes___nodes___label',
  ConnectedContentTypesNodesLabelsAddNew = 'connectedContentTypes___nodes___labels___addNew',
  ConnectedContentTypesNodesLabelsAddNewItem = 'connectedContentTypes___nodes___labels___addNewItem',
  ConnectedContentTypesNodesLabelsAllItems = 'connectedContentTypes___nodes___labels___allItems',
  ConnectedContentTypesNodesLabelsArchives = 'connectedContentTypes___nodes___labels___archives',
  ConnectedContentTypesNodesLabelsAttributes = 'connectedContentTypes___nodes___labels___attributes',
  ConnectedContentTypesNodesLabelsEditItem = 'connectedContentTypes___nodes___labels___editItem',
  ConnectedContentTypesNodesLabelsFeaturedImage = 'connectedContentTypes___nodes___labels___featuredImage',
  ConnectedContentTypesNodesLabelsFilterItemsList = 'connectedContentTypes___nodes___labels___filterItemsList',
  ConnectedContentTypesNodesLabelsInsertIntoItem = 'connectedContentTypes___nodes___labels___insertIntoItem',
  ConnectedContentTypesNodesLabelsItemsList = 'connectedContentTypes___nodes___labels___itemsList',
  ConnectedContentTypesNodesLabelsItemsListNavigation = 'connectedContentTypes___nodes___labels___itemsListNavigation',
  ConnectedContentTypesNodesLabelsMenuName = 'connectedContentTypes___nodes___labels___menuName',
  ConnectedContentTypesNodesLabelsName = 'connectedContentTypes___nodes___labels___name',
  ConnectedContentTypesNodesLabelsNewItem = 'connectedContentTypes___nodes___labels___newItem',
  ConnectedContentTypesNodesLabelsNotFound = 'connectedContentTypes___nodes___labels___notFound',
  ConnectedContentTypesNodesLabelsNotFoundInTrash = 'connectedContentTypes___nodes___labels___notFoundInTrash',
  ConnectedContentTypesNodesLabelsParentItemColon = 'connectedContentTypes___nodes___labels___parentItemColon',
  ConnectedContentTypesNodesLabelsRemoveFeaturedImage = 'connectedContentTypes___nodes___labels___removeFeaturedImage',
  ConnectedContentTypesNodesLabelsSearchItems = 'connectedContentTypes___nodes___labels___searchItems',
  ConnectedContentTypesNodesLabelsSetFeaturedImage = 'connectedContentTypes___nodes___labels___setFeaturedImage',
  ConnectedContentTypesNodesLabelsSingularName = 'connectedContentTypes___nodes___labels___singularName',
  ConnectedContentTypesNodesLabelsUploadedToThisItem = 'connectedContentTypes___nodes___labels___uploadedToThisItem',
  ConnectedContentTypesNodesLabelsUseFeaturedImage = 'connectedContentTypes___nodes___labels___useFeaturedImage',
  ConnectedContentTypesNodesLabelsViewItem = 'connectedContentTypes___nodes___labels___viewItem',
  ConnectedContentTypesNodesLabelsViewItems = 'connectedContentTypes___nodes___labels___viewItems',
  ConnectedContentTypesNodesMenuIcon = 'connectedContentTypes___nodes___menuIcon',
  ConnectedContentTypesNodesMenuPosition = 'connectedContentTypes___nodes___menuPosition',
  ConnectedContentTypesNodesName = 'connectedContentTypes___nodes___name',
  ConnectedContentTypesNodesNodeType = 'connectedContentTypes___nodes___nodeType',
  ConnectedContentTypesNodesParentChildren = 'connectedContentTypes___nodes___parent___children',
  ConnectedContentTypesNodesParentId = 'connectedContentTypes___nodes___parent___id',
  ConnectedContentTypesNodesPublic = 'connectedContentTypes___nodes___public',
  ConnectedContentTypesNodesPubliclyQueryable = 'connectedContentTypes___nodes___publiclyQueryable',
  ConnectedContentTypesNodesRestBase = 'connectedContentTypes___nodes___restBase',
  ConnectedContentTypesNodesRestControllerClass = 'connectedContentTypes___nodes___restControllerClass',
  ConnectedContentTypesNodesShowInAdminBar = 'connectedContentTypes___nodes___showInAdminBar',
  ConnectedContentTypesNodesShowInGraphql = 'connectedContentTypes___nodes___showInGraphql',
  ConnectedContentTypesNodesShowInMenu = 'connectedContentTypes___nodes___showInMenu',
  ConnectedContentTypesNodesShowInNavMenus = 'connectedContentTypes___nodes___showInNavMenus',
  ConnectedContentTypesNodesShowInRest = 'connectedContentTypes___nodes___showInRest',
  ConnectedContentTypesNodesShowUi = 'connectedContentTypes___nodes___showUi',
  ConnectedContentTypesNodesUri = 'connectedContentTypes___nodes___uri',
  Description = 'description',
  GraphqlPluralName = 'graphqlPluralName',
  GraphqlSingleName = 'graphqlSingleName',
  Hierarchical = 'hierarchical',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Label = 'label',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Public = 'public',
  RestBase = 'restBase',
  RestControllerClass = 'restControllerClass',
  ShowCloud = 'showCloud',
  ShowInAdminColumn = 'showInAdminColumn',
  ShowInGraphql = 'showInGraphql',
  ShowInMenu = 'showInMenu',
  ShowInNavMenus = 'showInNavMenus',
  ShowInQuickEdit = 'showInQuickEdit',
  ShowInRest = 'showInRest',
  ShowUi = 'showUi'
}

export type WpTaxonomyFilterInput = {
  archivePath?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  connectedContentTypes?: InputMaybe<WpTaxonomyToContentTypeConnectionFilterInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  graphqlPluralName?: InputMaybe<StringQueryOperatorInput>;
  graphqlSingleName?: InputMaybe<StringQueryOperatorInput>;
  hierarchical?: InputMaybe<BooleanQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  label?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  public?: InputMaybe<BooleanQueryOperatorInput>;
  restBase?: InputMaybe<StringQueryOperatorInput>;
  restControllerClass?: InputMaybe<StringQueryOperatorInput>;
  showCloud?: InputMaybe<BooleanQueryOperatorInput>;
  showInAdminColumn?: InputMaybe<BooleanQueryOperatorInput>;
  showInGraphql?: InputMaybe<BooleanQueryOperatorInput>;
  showInMenu?: InputMaybe<BooleanQueryOperatorInput>;
  showInNavMenus?: InputMaybe<BooleanQueryOperatorInput>;
  showInQuickEdit?: InputMaybe<BooleanQueryOperatorInput>;
  showInRest?: InputMaybe<BooleanQueryOperatorInput>;
  showUi?: InputMaybe<BooleanQueryOperatorInput>;
};

export type WpTaxonomyFilterListInput = {
  elemMatch?: InputMaybe<WpTaxonomyFilterInput>;
};

export type WpTaxonomyGroupConnection = {
  __typename?: 'WpTaxonomyGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTaxonomyEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpTaxonomyGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTaxonomy>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTaxonomyGroupConnectionDistinctArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionGroupArgs = {
  field: WpTaxonomyFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTaxonomyGroupConnectionMaxArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionMinArgs = {
  field: WpTaxonomyFieldsEnum;
};


export type WpTaxonomyGroupConnectionSumArgs = {
  field: WpTaxonomyFieldsEnum;
};

export type WpTaxonomySortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTaxonomyFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the Taxonomy type and the ContentType type */
export type WpTaxonomyToContentTypeConnection = {
  __typename?: 'WpTaxonomyToContentTypeConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpContentType>>>;
};

export type WpTaxonomyToContentTypeConnectionFilterInput = {
  nodes?: InputMaybe<WpContentTypeFilterListInput>;
};

export type WpTermNode = {
  children: Array<Node>;
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** The description of the object */
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The link to the term */
  link?: Maybe<Scalars['String']>;
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>;
  /** The name of the taxonomy that the object is associated with */
  taxonomyName?: Maybe<Scalars['String']>;
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>;
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

export type WpTermNodeConnection = {
  __typename?: 'WpTermNodeConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTermNodeEdge>;
  group: Array<WpTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTermNodeConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionGroupArgs = {
  field: WpTermNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTermNodeConnectionMaxArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionMinArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeConnectionSumArgs = {
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeEdge = {
  __typename?: 'WpTermNodeEdge';
  next?: Maybe<WpTermNode>;
  node: WpTermNode;
  previous?: Maybe<WpTermNode>;
};

export enum WpTermNodeFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Count = 'count',
  DatabaseId = 'databaseId',
  Description = 'description',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  Link = 'link',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  Slug = 'slug',
  TaxonomyName = 'taxonomyName',
  TermGroupId = 'termGroupId',
  TermTaxonomyId = 'termTaxonomyId',
  Uri = 'uri'
}

export type WpTermNodeFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  link?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomyName?: InputMaybe<StringQueryOperatorInput>;
  termGroupId?: InputMaybe<IntQueryOperatorInput>;
  termTaxonomyId?: InputMaybe<IntQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
};

export type WpTermNodeFilterListInput = {
  elemMatch?: InputMaybe<WpTermNodeFilterInput>;
};

export type WpTermNodeGroupConnection = {
  __typename?: 'WpTermNodeGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpTermNodeEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpTermNodeGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpTermNode>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpTermNodeGroupConnectionDistinctArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionGroupArgs = {
  field: WpTermNodeFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpTermNodeGroupConnectionMaxArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionMinArgs = {
  field: WpTermNodeFieldsEnum;
};


export type WpTermNodeGroupConnectionSumArgs = {
  field: WpTermNodeFieldsEnum;
};

export type WpTermNodeSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpTermNodeFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** tribe/events-list block */
export type WpTribeEventsListBlock = WpBlock & {
  __typename?: 'WpTribeEventsListBlock';
  attributes?: Maybe<WpTribeEventsListBlockAttributes>;
  /** Block attributes, JSON encoded */
  attributesJSON?: Maybe<Scalars['String']>;
  /** Server side rendered content. */
  dynamicContent?: Maybe<Scalars['String']>;
  /** Gutenberg blocks */
  innerBlocks?: Maybe<Array<WpBlock>>;
  /** Is block rendered server side. */
  isDynamic: Scalars['Boolean'];
  /** Name of the block. */
  name: Scalars['String'];
  order: Scalars['Int'];
  /** Original HTML content. */
  originalContent?: Maybe<Scalars['String']>;
  /** Parent post. */
  parentNode: WpNode;
  /** Parent post id. */
  parentNodeDatabaseId: Scalars['Int'];
  /** Original HTML content with inner blocks. */
  saveContent?: Maybe<Scalars['String']>;
};

export type WpTribeEventsListBlockAttributes = {
  __typename?: 'WpTribeEventsListBlockAttributes';
  className?: Maybe<Scalars['String']>;
  lock?: Maybe<Scalars['JSON']>;
};

export type WpUniformResourceIdentifiable = {
  /** The unique resource identifier path */
  id: Scalars['ID'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
};

/** A User object */
export type WpUser = Node & WpCommenter & WpDatabaseIdentifier & WpNode & WpUniformResourceIdentifiable & {
  __typename?: 'WpUser';
  /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
  avatar?: Maybe<WpAvatar>;
  /** Connection between the User type and the BlockEditorPreview type */
  blockEditorPreviews?: Maybe<WpUserToBlockEditorPreviewConnection>;
  /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
  capKey?: Maybe<Scalars['String']>;
  /** A list of capabilities (permissions) granted to the user */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  /** Connection between the User type and the Comment type */
  comments?: Maybe<WpUserToCommentConnection>;
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int'];
  /** Description of the user. */
  description?: Maybe<Scalars['String']>;
  /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
  email?: Maybe<Scalars['String']>;
  /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
  extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean'];
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean'];
  /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
  lastName?: Maybe<Scalars['String']>;
  /** The preferred language locale set for the user. Value derived from get_user_locale(). */
  locale?: Maybe<Scalars['String']>;
  /** Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property. */
  name?: Maybe<Scalars['String']>;
  /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
  nicename?: Maybe<Scalars['String']>;
  /** Nickname of the user. */
  nickname?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  /** Connection between the User type and the page type */
  pages?: Maybe<WpUserToPageConnection>;
  parent?: Maybe<Node>;
  /** Connection between the User type and the post type */
  posts?: Maybe<WpUserToPostConnection>;
  /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
  registeredDate?: Maybe<Scalars['String']>;
  /** Connection between the User type and the UserRole type */
  roles?: Maybe<WpUserToUserRoleConnection>;
  /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
  slug?: Maybe<Scalars['String']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']>;
  /** A website url that is associated with the user. */
  url?: Maybe<Scalars['String']>;
  /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
  username?: Maybe<Scalars['String']>;
};

export type WpUserConnection = {
  __typename?: 'WpUserConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpUserEdge>;
  group: Array<WpUserGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpUserConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionGroupArgs = {
  field: WpUserFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpUserConnectionMaxArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionMinArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserConnectionSumArgs = {
  field: WpUserFieldsEnum;
};

export type WpUserEdge = {
  __typename?: 'WpUserEdge';
  next?: Maybe<WpUser>;
  node: WpUser;
  previous?: Maybe<WpUser>;
};

export enum WpUserFieldsEnum {
  AvatarDefault = 'avatar___default',
  AvatarExtraAttr = 'avatar___extraAttr',
  AvatarForceDefault = 'avatar___forceDefault',
  AvatarFoundAvatar = 'avatar___foundAvatar',
  AvatarHeight = 'avatar___height',
  AvatarRating = 'avatar___rating',
  AvatarScheme = 'avatar___scheme',
  AvatarSize = 'avatar___size',
  AvatarUrl = 'avatar___url',
  AvatarWidth = 'avatar___width',
  BlockEditorPreviewsNodes = 'blockEditorPreviews___nodes',
  BlockEditorPreviewsNodesAuthorDatabaseId = 'blockEditorPreviews___nodes___authorDatabaseId',
  BlockEditorPreviewsNodesAuthorId = 'blockEditorPreviews___nodes___authorId',
  BlockEditorPreviewsNodesBlocks = 'blockEditorPreviews___nodes___blocks',
  BlockEditorPreviewsNodesBlocksJson = 'blockEditorPreviews___nodes___blocksJSON',
  BlockEditorPreviewsNodesBlocksAttributesJson = 'blockEditorPreviews___nodes___blocks___attributesJSON',
  BlockEditorPreviewsNodesBlocksDynamicContent = 'blockEditorPreviews___nodes___blocks___dynamicContent',
  BlockEditorPreviewsNodesBlocksInnerBlocks = 'blockEditorPreviews___nodes___blocks___innerBlocks',
  BlockEditorPreviewsNodesBlocksIsDynamic = 'blockEditorPreviews___nodes___blocks___isDynamic',
  BlockEditorPreviewsNodesBlocksName = 'blockEditorPreviews___nodes___blocks___name',
  BlockEditorPreviewsNodesBlocksOrder = 'blockEditorPreviews___nodes___blocks___order',
  BlockEditorPreviewsNodesBlocksOriginalContent = 'blockEditorPreviews___nodes___blocks___originalContent',
  BlockEditorPreviewsNodesBlocksParentNodeDatabaseId = 'blockEditorPreviews___nodes___blocks___parentNodeDatabaseId',
  BlockEditorPreviewsNodesBlocksSaveContent = 'blockEditorPreviews___nodes___blocks___saveContent',
  BlockEditorPreviewsNodesChildren = 'blockEditorPreviews___nodes___children',
  BlockEditorPreviewsNodesChildrenChildren = 'blockEditorPreviews___nodes___children___children',
  BlockEditorPreviewsNodesChildrenId = 'blockEditorPreviews___nodes___children___id',
  BlockEditorPreviewsNodesContent = 'blockEditorPreviews___nodes___content',
  BlockEditorPreviewsNodesContentTypeName = 'blockEditorPreviews___nodes___contentTypeName',
  BlockEditorPreviewsNodesDatabaseId = 'blockEditorPreviews___nodes___databaseId',
  BlockEditorPreviewsNodesDate = 'blockEditorPreviews___nodes___date',
  BlockEditorPreviewsNodesDateGmt = 'blockEditorPreviews___nodes___dateGmt',
  BlockEditorPreviewsNodesDesiredSlug = 'blockEditorPreviews___nodes___desiredSlug',
  BlockEditorPreviewsNodesEnclosure = 'blockEditorPreviews___nodes___enclosure',
  BlockEditorPreviewsNodesGuid = 'blockEditorPreviews___nodes___guid',
  BlockEditorPreviewsNodesId = 'blockEditorPreviews___nodes___id',
  BlockEditorPreviewsNodesInternalContent = 'blockEditorPreviews___nodes___internal___content',
  BlockEditorPreviewsNodesInternalContentDigest = 'blockEditorPreviews___nodes___internal___contentDigest',
  BlockEditorPreviewsNodesInternalDescription = 'blockEditorPreviews___nodes___internal___description',
  BlockEditorPreviewsNodesInternalFieldOwners = 'blockEditorPreviews___nodes___internal___fieldOwners',
  BlockEditorPreviewsNodesInternalIgnoreType = 'blockEditorPreviews___nodes___internal___ignoreType',
  BlockEditorPreviewsNodesInternalMediaType = 'blockEditorPreviews___nodes___internal___mediaType',
  BlockEditorPreviewsNodesInternalOwner = 'blockEditorPreviews___nodes___internal___owner',
  BlockEditorPreviewsNodesInternalType = 'blockEditorPreviews___nodes___internal___type',
  BlockEditorPreviewsNodesIsContentNode = 'blockEditorPreviews___nodes___isContentNode',
  BlockEditorPreviewsNodesIsTermNode = 'blockEditorPreviews___nodes___isTermNode',
  BlockEditorPreviewsNodesLastUpdateTime = 'blockEditorPreviews___nodes___lastUpdateTime',
  BlockEditorPreviewsNodesLink = 'blockEditorPreviews___nodes___link',
  BlockEditorPreviewsNodesModified = 'blockEditorPreviews___nodes___modified',
  BlockEditorPreviewsNodesModifiedGmt = 'blockEditorPreviews___nodes___modifiedGmt',
  BlockEditorPreviewsNodesNodeType = 'blockEditorPreviews___nodes___nodeType',
  BlockEditorPreviewsNodesParentChildren = 'blockEditorPreviews___nodes___parent___children',
  BlockEditorPreviewsNodesParentId = 'blockEditorPreviews___nodes___parent___id',
  BlockEditorPreviewsNodesPreviewedDatabaseId = 'blockEditorPreviews___nodes___previewedDatabaseId',
  BlockEditorPreviewsNodesPreviewedParentDatabaseId = 'blockEditorPreviews___nodes___previewedParentDatabaseId',
  BlockEditorPreviewsNodesPreviewedBlocks = 'blockEditorPreviews___nodes___previewed___blocks',
  BlockEditorPreviewsNodesPreviewedBlocksJson = 'blockEditorPreviews___nodes___previewed___blocksJSON',
  BlockEditorPreviewsNodesPreviewedChildren = 'blockEditorPreviews___nodes___previewed___children',
  BlockEditorPreviewsNodesPreviewedId = 'blockEditorPreviews___nodes___previewed___id',
  BlockEditorPreviewsNodesPreviewedNodeType = 'blockEditorPreviews___nodes___previewed___nodeType',
  BlockEditorPreviewsNodesPreviewedPreviewBlocks = 'blockEditorPreviews___nodes___previewed___previewBlocks',
  BlockEditorPreviewsNodesPreviewedPreviewBlocksJson = 'blockEditorPreviews___nodes___previewed___previewBlocksJSON',
  BlockEditorPreviewsNodesSlug = 'blockEditorPreviews___nodes___slug',
  BlockEditorPreviewsNodesStatus = 'blockEditorPreviews___nodes___status',
  BlockEditorPreviewsNodesTemplateTemplateName = 'blockEditorPreviews___nodes___template___templateName',
  BlockEditorPreviewsNodesTitle = 'blockEditorPreviews___nodes___title',
  BlockEditorPreviewsNodesUri = 'blockEditorPreviews___nodes___uri',
  CapKey = 'capKey',
  Capabilities = 'capabilities',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  CommentsNodes = 'comments___nodes',
  CommentsNodesAgent = 'comments___nodes___agent',
  CommentsNodesApproved = 'comments___nodes___approved',
  CommentsNodesAuthorIp = 'comments___nodes___authorIp',
  CommentsNodesChildren = 'comments___nodes___children',
  CommentsNodesChildrenChildren = 'comments___nodes___children___children',
  CommentsNodesChildrenId = 'comments___nodes___children___id',
  CommentsNodesContent = 'comments___nodes___content',
  CommentsNodesDatabaseId = 'comments___nodes___databaseId',
  CommentsNodesDate = 'comments___nodes___date',
  CommentsNodesDateGmt = 'comments___nodes___dateGmt',
  CommentsNodesId = 'comments___nodes___id',
  CommentsNodesInternalContent = 'comments___nodes___internal___content',
  CommentsNodesInternalContentDigest = 'comments___nodes___internal___contentDigest',
  CommentsNodesInternalDescription = 'comments___nodes___internal___description',
  CommentsNodesInternalFieldOwners = 'comments___nodes___internal___fieldOwners',
  CommentsNodesInternalIgnoreType = 'comments___nodes___internal___ignoreType',
  CommentsNodesInternalMediaType = 'comments___nodes___internal___mediaType',
  CommentsNodesInternalOwner = 'comments___nodes___internal___owner',
  CommentsNodesInternalType = 'comments___nodes___internal___type',
  CommentsNodesKarma = 'comments___nodes___karma',
  CommentsNodesNodeType = 'comments___nodes___nodeType',
  CommentsNodesParentDatabaseId = 'comments___nodes___parentDatabaseId',
  CommentsNodesParentId = 'comments___nodes___parentId',
  CommentsNodesParentChildren = 'comments___nodes___parent___children',
  CommentsNodesParentId = 'comments___nodes___parent___id',
  CommentsNodesRepliesNodes = 'comments___nodes___replies___nodes',
  CommentsNodesType = 'comments___nodes___type',
  DatabaseId = 'databaseId',
  Description = 'description',
  Email = 'email',
  ExtraCapabilities = 'extraCapabilities',
  FirstName = 'firstName',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  IsContentNode = 'isContentNode',
  IsTermNode = 'isTermNode',
  LastName = 'lastName',
  Locale = 'locale',
  Name = 'name',
  Nicename = 'nicename',
  Nickname = 'nickname',
  NodeType = 'nodeType',
  PagesNodes = 'pages___nodes',
  PagesNodesAncestorsNodes = 'pages___nodes___ancestors___nodes',
  PagesNodesAuthorDatabaseId = 'pages___nodes___authorDatabaseId',
  PagesNodesAuthorId = 'pages___nodes___authorId',
  PagesNodesBlocks = 'pages___nodes___blocks',
  PagesNodesBlocksJson = 'pages___nodes___blocksJSON',
  PagesNodesBlocksAttributesJson = 'pages___nodes___blocks___attributesJSON',
  PagesNodesBlocksDynamicContent = 'pages___nodes___blocks___dynamicContent',
  PagesNodesBlocksInnerBlocks = 'pages___nodes___blocks___innerBlocks',
  PagesNodesBlocksIsDynamic = 'pages___nodes___blocks___isDynamic',
  PagesNodesBlocksName = 'pages___nodes___blocks___name',
  PagesNodesBlocksOrder = 'pages___nodes___blocks___order',
  PagesNodesBlocksOriginalContent = 'pages___nodes___blocks___originalContent',
  PagesNodesBlocksParentNodeDatabaseId = 'pages___nodes___blocks___parentNodeDatabaseId',
  PagesNodesBlocksSaveContent = 'pages___nodes___blocks___saveContent',
  PagesNodesChildren = 'pages___nodes___children',
  PagesNodesChildrenChildren = 'pages___nodes___children___children',
  PagesNodesChildrenId = 'pages___nodes___children___id',
  PagesNodesCommentCount = 'pages___nodes___commentCount',
  PagesNodesCommentStatus = 'pages___nodes___commentStatus',
  PagesNodesCommentsNodes = 'pages___nodes___comments___nodes',
  PagesNodesContent = 'pages___nodes___content',
  PagesNodesContentTypeName = 'pages___nodes___contentTypeName',
  PagesNodesDatabaseId = 'pages___nodes___databaseId',
  PagesNodesDate = 'pages___nodes___date',
  PagesNodesDateGmt = 'pages___nodes___dateGmt',
  PagesNodesDesiredSlug = 'pages___nodes___desiredSlug',
  PagesNodesEnclosure = 'pages___nodes___enclosure',
  PagesNodesFeaturedImageDatabaseId = 'pages___nodes___featuredImageDatabaseId',
  PagesNodesFeaturedImageId = 'pages___nodes___featuredImageId',
  PagesNodesGuid = 'pages___nodes___guid',
  PagesNodesId = 'pages___nodes___id',
  PagesNodesInternalContent = 'pages___nodes___internal___content',
  PagesNodesInternalContentDigest = 'pages___nodes___internal___contentDigest',
  PagesNodesInternalDescription = 'pages___nodes___internal___description',
  PagesNodesInternalFieldOwners = 'pages___nodes___internal___fieldOwners',
  PagesNodesInternalIgnoreType = 'pages___nodes___internal___ignoreType',
  PagesNodesInternalMediaType = 'pages___nodes___internal___mediaType',
  PagesNodesInternalOwner = 'pages___nodes___internal___owner',
  PagesNodesInternalType = 'pages___nodes___internal___type',
  PagesNodesIsContentNode = 'pages___nodes___isContentNode',
  PagesNodesIsFrontPage = 'pages___nodes___isFrontPage',
  PagesNodesIsPostsPage = 'pages___nodes___isPostsPage',
  PagesNodesIsPrivacyPage = 'pages___nodes___isPrivacyPage',
  PagesNodesIsRevision = 'pages___nodes___isRevision',
  PagesNodesIsTermNode = 'pages___nodes___isTermNode',
  PagesNodesLink = 'pages___nodes___link',
  PagesNodesMenuOrder = 'pages___nodes___menuOrder',
  PagesNodesModified = 'pages___nodes___modified',
  PagesNodesModifiedGmt = 'pages___nodes___modifiedGmt',
  PagesNodesNodeType = 'pages___nodes___nodeType',
  PagesNodesParentDatabaseId = 'pages___nodes___parentDatabaseId',
  PagesNodesParentId = 'pages___nodes___parentId',
  PagesNodesParentChildren = 'pages___nodes___parent___children',
  PagesNodesParentId = 'pages___nodes___parent___id',
  PagesNodesPreviewBlocks = 'pages___nodes___previewBlocks',
  PagesNodesPreviewBlocksJson = 'pages___nodes___previewBlocksJSON',
  PagesNodesPreviewBlocksAttributesJson = 'pages___nodes___previewBlocks___attributesJSON',
  PagesNodesPreviewBlocksDynamicContent = 'pages___nodes___previewBlocks___dynamicContent',
  PagesNodesPreviewBlocksInnerBlocks = 'pages___nodes___previewBlocks___innerBlocks',
  PagesNodesPreviewBlocksIsDynamic = 'pages___nodes___previewBlocks___isDynamic',
  PagesNodesPreviewBlocksName = 'pages___nodes___previewBlocks___name',
  PagesNodesPreviewBlocksOrder = 'pages___nodes___previewBlocks___order',
  PagesNodesPreviewBlocksOriginalContent = 'pages___nodes___previewBlocks___originalContent',
  PagesNodesPreviewBlocksParentNodeDatabaseId = 'pages___nodes___previewBlocks___parentNodeDatabaseId',
  PagesNodesPreviewBlocksSaveContent = 'pages___nodes___previewBlocks___saveContent',
  PagesNodesSlug = 'pages___nodes___slug',
  PagesNodesStatus = 'pages___nodes___status',
  PagesNodesTemplateTemplateName = 'pages___nodes___template___templateName',
  PagesNodesTitle = 'pages___nodes___title',
  PagesNodesUri = 'pages___nodes___uri',
  PagesNodesWpChildrenNodes = 'pages___nodes___wpChildren___nodes',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PostsNodes = 'posts___nodes',
  PostsNodesAuthorDatabaseId = 'posts___nodes___authorDatabaseId',
  PostsNodesAuthorId = 'posts___nodes___authorId',
  PostsNodesBlocks = 'posts___nodes___blocks',
  PostsNodesBlocksJson = 'posts___nodes___blocksJSON',
  PostsNodesBlocksAttributesJson = 'posts___nodes___blocks___attributesJSON',
  PostsNodesBlocksDynamicContent = 'posts___nodes___blocks___dynamicContent',
  PostsNodesBlocksInnerBlocks = 'posts___nodes___blocks___innerBlocks',
  PostsNodesBlocksIsDynamic = 'posts___nodes___blocks___isDynamic',
  PostsNodesBlocksName = 'posts___nodes___blocks___name',
  PostsNodesBlocksOrder = 'posts___nodes___blocks___order',
  PostsNodesBlocksOriginalContent = 'posts___nodes___blocks___originalContent',
  PostsNodesBlocksParentNodeDatabaseId = 'posts___nodes___blocks___parentNodeDatabaseId',
  PostsNodesBlocksSaveContent = 'posts___nodes___blocks___saveContent',
  PostsNodesCategoriesNodes = 'posts___nodes___categories___nodes',
  PostsNodesChildren = 'posts___nodes___children',
  PostsNodesChildrenChildren = 'posts___nodes___children___children',
  PostsNodesChildrenId = 'posts___nodes___children___id',
  PostsNodesCommentCount = 'posts___nodes___commentCount',
  PostsNodesCommentStatus = 'posts___nodes___commentStatus',
  PostsNodesCommentsNodes = 'posts___nodes___comments___nodes',
  PostsNodesContent = 'posts___nodes___content',
  PostsNodesContentTypeName = 'posts___nodes___contentTypeName',
  PostsNodesDatabaseId = 'posts___nodes___databaseId',
  PostsNodesDate = 'posts___nodes___date',
  PostsNodesDateGmt = 'posts___nodes___dateGmt',
  PostsNodesDesiredSlug = 'posts___nodes___desiredSlug',
  PostsNodesEnclosure = 'posts___nodes___enclosure',
  PostsNodesExcerpt = 'posts___nodes___excerpt',
  PostsNodesFeaturedImageDatabaseId = 'posts___nodes___featuredImageDatabaseId',
  PostsNodesFeaturedImageId = 'posts___nodes___featuredImageId',
  PostsNodesGuid = 'posts___nodes___guid',
  PostsNodesId = 'posts___nodes___id',
  PostsNodesInternalContent = 'posts___nodes___internal___content',
  PostsNodesInternalContentDigest = 'posts___nodes___internal___contentDigest',
  PostsNodesInternalDescription = 'posts___nodes___internal___description',
  PostsNodesInternalFieldOwners = 'posts___nodes___internal___fieldOwners',
  PostsNodesInternalIgnoreType = 'posts___nodes___internal___ignoreType',
  PostsNodesInternalMediaType = 'posts___nodes___internal___mediaType',
  PostsNodesInternalOwner = 'posts___nodes___internal___owner',
  PostsNodesInternalType = 'posts___nodes___internal___type',
  PostsNodesIsContentNode = 'posts___nodes___isContentNode',
  PostsNodesIsRevision = 'posts___nodes___isRevision',
  PostsNodesIsSticky = 'posts___nodes___isSticky',
  PostsNodesIsTermNode = 'posts___nodes___isTermNode',
  PostsNodesLink = 'posts___nodes___link',
  PostsNodesModified = 'posts___nodes___modified',
  PostsNodesModifiedGmt = 'posts___nodes___modifiedGmt',
  PostsNodesNodeType = 'posts___nodes___nodeType',
  PostsNodesParentChildren = 'posts___nodes___parent___children',
  PostsNodesParentId = 'posts___nodes___parent___id',
  PostsNodesPingStatus = 'posts___nodes___pingStatus',
  PostsNodesPinged = 'posts___nodes___pinged',
  PostsNodesPostFormatsNodes = 'posts___nodes___postFormats___nodes',
  PostsNodesPreviewBlocks = 'posts___nodes___previewBlocks',
  PostsNodesPreviewBlocksJson = 'posts___nodes___previewBlocksJSON',
  PostsNodesPreviewBlocksAttributesJson = 'posts___nodes___previewBlocks___attributesJSON',
  PostsNodesPreviewBlocksDynamicContent = 'posts___nodes___previewBlocks___dynamicContent',
  PostsNodesPreviewBlocksInnerBlocks = 'posts___nodes___previewBlocks___innerBlocks',
  PostsNodesPreviewBlocksIsDynamic = 'posts___nodes___previewBlocks___isDynamic',
  PostsNodesPreviewBlocksName = 'posts___nodes___previewBlocks___name',
  PostsNodesPreviewBlocksOrder = 'posts___nodes___previewBlocks___order',
  PostsNodesPreviewBlocksOriginalContent = 'posts___nodes___previewBlocks___originalContent',
  PostsNodesPreviewBlocksParentNodeDatabaseId = 'posts___nodes___previewBlocks___parentNodeDatabaseId',
  PostsNodesPreviewBlocksSaveContent = 'posts___nodes___previewBlocks___saveContent',
  PostsNodesSlug = 'posts___nodes___slug',
  PostsNodesStatus = 'posts___nodes___status',
  PostsNodesTagsNodes = 'posts___nodes___tags___nodes',
  PostsNodesTemplateTemplateName = 'posts___nodes___template___templateName',
  PostsNodesTermsNodes = 'posts___nodes___terms___nodes',
  PostsNodesTitle = 'posts___nodes___title',
  PostsNodesToPing = 'posts___nodes___toPing',
  PostsNodesUri = 'posts___nodes___uri',
  RegisteredDate = 'registeredDate',
  RolesNodes = 'roles___nodes',
  RolesNodesCapabilities = 'roles___nodes___capabilities',
  RolesNodesChildren = 'roles___nodes___children',
  RolesNodesChildrenChildren = 'roles___nodes___children___children',
  RolesNodesChildrenId = 'roles___nodes___children___id',
  RolesNodesDisplayName = 'roles___nodes___displayName',
  RolesNodesId = 'roles___nodes___id',
  RolesNodesInternalContent = 'roles___nodes___internal___content',
  RolesNodesInternalContentDigest = 'roles___nodes___internal___contentDigest',
  RolesNodesInternalDescription = 'roles___nodes___internal___description',
  RolesNodesInternalFieldOwners = 'roles___nodes___internal___fieldOwners',
  RolesNodesInternalIgnoreType = 'roles___nodes___internal___ignoreType',
  RolesNodesInternalMediaType = 'roles___nodes___internal___mediaType',
  RolesNodesInternalOwner = 'roles___nodes___internal___owner',
  RolesNodesInternalType = 'roles___nodes___internal___type',
  RolesNodesName = 'roles___nodes___name',
  RolesNodesNodeType = 'roles___nodes___nodeType',
  RolesNodesParentChildren = 'roles___nodes___parent___children',
  RolesNodesParentId = 'roles___nodes___parent___id',
  Slug = 'slug',
  Uri = 'uri',
  Url = 'url',
  Username = 'username'
}

export type WpUserFilterInput = {
  avatar?: InputMaybe<WpAvatarFilterInput>;
  blockEditorPreviews?: InputMaybe<WpUserToBlockEditorPreviewConnectionFilterInput>;
  capKey?: InputMaybe<StringQueryOperatorInput>;
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  comments?: InputMaybe<WpUserToCommentConnectionFilterInput>;
  databaseId?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  email?: InputMaybe<StringQueryOperatorInput>;
  extraCapabilities?: InputMaybe<StringQueryOperatorInput>;
  firstName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  isContentNode?: InputMaybe<BooleanQueryOperatorInput>;
  isTermNode?: InputMaybe<BooleanQueryOperatorInput>;
  lastName?: InputMaybe<StringQueryOperatorInput>;
  locale?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nicename?: InputMaybe<StringQueryOperatorInput>;
  nickname?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  pages?: InputMaybe<WpUserToPageConnectionFilterInput>;
  parent?: InputMaybe<NodeFilterInput>;
  posts?: InputMaybe<WpUserToPostConnectionFilterInput>;
  registeredDate?: InputMaybe<StringQueryOperatorInput>;
  roles?: InputMaybe<WpUserToUserRoleConnectionFilterInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uri?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  username?: InputMaybe<StringQueryOperatorInput>;
};

export type WpUserGroupConnection = {
  __typename?: 'WpUserGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpUserEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpUserGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpUser>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpUserGroupConnectionDistinctArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionGroupArgs = {
  field: WpUserFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpUserGroupConnectionMaxArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionMinArgs = {
  field: WpUserFieldsEnum;
};


export type WpUserGroupConnectionSumArgs = {
  field: WpUserFieldsEnum;
};

/** A user role object */
export type WpUserRole = Node & WpNode & {
  __typename?: 'WpUserRole';
  /** The capabilities that belong to this role */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>;
  children: Array<Node>;
  /** The display name of the role */
  displayName?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  internal: Internal;
  /** The registered name of the role */
  name?: Maybe<Scalars['String']>;
  nodeType?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
};

export type WpUserRoleConnection = {
  __typename?: 'WpUserRoleConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpUserRoleEdge>;
  group: Array<WpUserRoleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpUserRoleConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionGroupArgs = {
  field: WpUserRoleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpUserRoleConnectionMaxArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionMinArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleConnectionSumArgs = {
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleEdge = {
  __typename?: 'WpUserRoleEdge';
  next?: Maybe<WpUserRole>;
  node: WpUserRole;
  previous?: Maybe<WpUserRole>;
};

export enum WpUserRoleFieldsEnum {
  Capabilities = 'capabilities',
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  DisplayName = 'displayName',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  Name = 'name',
  NodeType = 'nodeType',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id'
}

export type WpUserRoleFilterInput = {
  capabilities?: InputMaybe<StringQueryOperatorInput>;
  children?: InputMaybe<NodeFilterListInput>;
  displayName?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  nodeType?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
};

export type WpUserRoleFilterListInput = {
  elemMatch?: InputMaybe<WpUserRoleFilterInput>;
};

export type WpUserRoleGroupConnection = {
  __typename?: 'WpUserRoleGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<WpUserRoleEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<WpUserRoleGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<WpUserRole>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type WpUserRoleGroupConnectionDistinctArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionGroupArgs = {
  field: WpUserRoleFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type WpUserRoleGroupConnectionMaxArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionMinArgs = {
  field: WpUserRoleFieldsEnum;
};


export type WpUserRoleGroupConnectionSumArgs = {
  field: WpUserRoleFieldsEnum;
};

export type WpUserRoleSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpUserRoleFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

export type WpUserSortInput = {
  fields?: InputMaybe<Array<InputMaybe<WpUserFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};

/** Connection between the User type and the BlockEditorPreview type */
export type WpUserToBlockEditorPreviewConnection = {
  __typename?: 'WpUserToBlockEditorPreviewConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpBlockEditorPreview>>>;
};

export type WpUserToBlockEditorPreviewConnectionFilterInput = {
  nodes?: InputMaybe<WpBlockEditorPreviewFilterListInput>;
};

/** Connection between the User type and the Comment type */
export type WpUserToCommentConnection = {
  __typename?: 'WpUserToCommentConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpComment>>>;
};

export type WpUserToCommentConnectionFilterInput = {
  nodes?: InputMaybe<WpCommentFilterListInput>;
};

/** Connection between the User type and the page type */
export type WpUserToPageConnection = {
  __typename?: 'WpUserToPageConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPage>>>;
};

export type WpUserToPageConnectionFilterInput = {
  nodes?: InputMaybe<WpPageFilterListInput>;
};

/** Connection between the User type and the post type */
export type WpUserToPostConnection = {
  __typename?: 'WpUserToPostConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpPost>>>;
};

export type WpUserToPostConnectionFilterInput = {
  nodes?: InputMaybe<WpPostFilterListInput>;
};

/** Connection between the User type and the UserRole type */
export type WpUserToUserRoleConnection = {
  __typename?: 'WpUserToUserRoleConnection';
  /** The nodes of the connection, without the edges */
  nodes?: Maybe<Array<Maybe<WpUserRole>>>;
};

export type WpUserToUserRoleConnectionFilterInput = {
  nodes?: InputMaybe<WpUserRoleFilterListInput>;
};

/** Information needed by gatsby-source-wordpress. */
export type WpWpGatsby = {
  __typename?: 'WpWPGatsby';
  /** Returns wether or not pretty permalinks are enabled. */
  arePrettyPermalinksEnabled?: Maybe<Scalars['Boolean']>;
  /** Wether or not the Preview frontend URL is online. */
  isPreviewFrontendOnline?: Maybe<Scalars['Boolean']>;
};

export type WpWpGatsbyFilterInput = {
  arePrettyPermalinksEnabled?: InputMaybe<BooleanQueryOperatorInput>;
  isPreviewFrontendOnline?: InputMaybe<BooleanQueryOperatorInput>;
};

/** The writing setting type */
export type WpWritingSettings = {
  __typename?: 'WpWritingSettings';
  /** Standard-Beitragskategorie. */
  defaultCategory?: Maybe<Scalars['Int']>;
  /** Standard-Beitragsformat. */
  defaultPostFormat?: Maybe<Scalars['String']>;
  /** Emoticons wie :-) und :-P als Grafiken anzeigen. */
  useSmilies?: Maybe<Scalars['Boolean']>;
};

export type WpWritingSettingsFilterInput = {
  defaultCategory?: InputMaybe<IntQueryOperatorInput>;
  defaultPostFormat?: InputMaybe<StringQueryOperatorInput>;
  useSmilies?: InputMaybe<BooleanQueryOperatorInput>;
};

export type Internal__Events = Node & {
  __typename?: 'internal__events';
  children: Array<Node>;
  events?: Maybe<Array<Maybe<Internal__EventsEvents>>>;
  id: Scalars['ID'];
  internal: Internal;
  next_rest_url?: Maybe<Scalars['String']>;
  parent?: Maybe<Node>;
  previous_rest_url?: Maybe<Scalars['String']>;
  rest_url?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['Int']>;
  total_pages?: Maybe<Scalars['Int']>;
};

export type Internal__EventsConnection = {
  __typename?: 'internal__eventsConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<Internal__EventsEdge>;
  group: Array<Internal__EventsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Internal__Events>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type Internal__EventsConnectionDistinctArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsConnectionGroupArgs = {
  field: Internal__EventsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type Internal__EventsConnectionMaxArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsConnectionMinArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsConnectionSumArgs = {
  field: Internal__EventsFieldsEnum;
};

export type Internal__EventsEdge = {
  __typename?: 'internal__eventsEdge';
  next?: Maybe<Internal__Events>;
  node: Internal__Events;
  previous?: Maybe<Internal__Events>;
};

export type Internal__EventsEvents = {
  __typename?: 'internal__eventsEvents';
  all_day?: Maybe<Scalars['Boolean']>;
  alternative_id?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  categories?: Maybe<Array<Maybe<Internal__EventsEventsCategories>>>;
  cost?: Maybe<Scalars['String']>;
  cost_details?: Maybe<Internal__EventsEventsCost_Details>;
  date?: Maybe<Scalars['Date']>;
  date_utc?: Maybe<Scalars['Date']>;
  description?: Maybe<Scalars['String']>;
  end_date?: Maybe<Scalars['Date']>;
  end_date_details?: Maybe<Internal__EventsEventsEnd_Date_Details>;
  excerpt?: Maybe<Scalars['String']>;
  featured?: Maybe<Scalars['Boolean']>;
  global_id?: Maybe<Scalars['String']>;
  global_id_lineage?: Maybe<Array<Maybe<Scalars['String']>>>;
  hide_from_listings?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['Boolean']>;
  modified?: Maybe<Scalars['Date']>;
  modified_utc?: Maybe<Scalars['Date']>;
  rest_url?: Maybe<Scalars['String']>;
  show_map?: Maybe<Scalars['Boolean']>;
  show_map_link?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  start_date?: Maybe<Scalars['Date']>;
  start_date_details?: Maybe<Internal__EventsEventsStart_Date_Details>;
  status?: Maybe<Scalars['String']>;
  sticky?: Maybe<Scalars['Boolean']>;
  timezone?: Maybe<Scalars['String']>;
  timezone_abbr?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  utc_end_date?: Maybe<Scalars['Date']>;
  utc_end_date_details?: Maybe<Internal__EventsEventsUtc_End_Date_Details>;
  utc_start_date?: Maybe<Scalars['Date']>;
  utc_start_date_details?: Maybe<Internal__EventsEventsUtc_Start_Date_Details>;
  venue?: Maybe<Internal__EventsEventsVenue>;
  website?: Maybe<Scalars['String']>;
};


export type Internal__EventsEventsDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsDate_UtcArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsEnd_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsModified_UtcArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsStart_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsUtc_End_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsUtc_Start_DateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsCategories = {
  __typename?: 'internal__eventsEventsCategories';
  alternative_id?: Maybe<Scalars['Int']>;
  alternative_parent?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  filter?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  taxonomy?: Maybe<Scalars['String']>;
  term_group?: Maybe<Scalars['Int']>;
  term_taxonomy_id?: Maybe<Scalars['Int']>;
  urls?: Maybe<Internal__EventsEventsCategoriesUrls>;
};

export type Internal__EventsEventsCategoriesFilterInput = {
  alternative_id?: InputMaybe<IntQueryOperatorInput>;
  alternative_parent?: InputMaybe<IntQueryOperatorInput>;
  count?: InputMaybe<IntQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  filter?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  taxonomy?: InputMaybe<StringQueryOperatorInput>;
  term_group?: InputMaybe<IntQueryOperatorInput>;
  term_taxonomy_id?: InputMaybe<IntQueryOperatorInput>;
  urls?: InputMaybe<Internal__EventsEventsCategoriesUrlsFilterInput>;
};

export type Internal__EventsEventsCategoriesFilterListInput = {
  elemMatch?: InputMaybe<Internal__EventsEventsCategoriesFilterInput>;
};

export type Internal__EventsEventsCategoriesUrls = {
  __typename?: 'internal__eventsEventsCategoriesUrls';
  collection?: Maybe<Scalars['String']>;
  self?: Maybe<Scalars['String']>;
  up?: Maybe<Scalars['String']>;
};

export type Internal__EventsEventsCategoriesUrlsFilterInput = {
  collection?: InputMaybe<StringQueryOperatorInput>;
  self?: InputMaybe<StringQueryOperatorInput>;
  up?: InputMaybe<StringQueryOperatorInput>;
};

export type Internal__EventsEventsCost_Details = {
  __typename?: 'internal__eventsEventsCost_details';
  currency_code?: Maybe<Scalars['String']>;
  currency_position?: Maybe<Scalars['String']>;
  currency_symbol?: Maybe<Scalars['String']>;
};

export type Internal__EventsEventsCost_DetailsFilterInput = {
  currency_code?: InputMaybe<StringQueryOperatorInput>;
  currency_position?: InputMaybe<StringQueryOperatorInput>;
  currency_symbol?: InputMaybe<StringQueryOperatorInput>;
};

export type Internal__EventsEventsEnd_Date_Details = {
  __typename?: 'internal__eventsEventsEnd_date_details';
  day?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  seconds?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};


export type Internal__EventsEventsEnd_Date_DetailsYearArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsEnd_Date_DetailsFilterInput = {
  day?: InputMaybe<StringQueryOperatorInput>;
  hour?: InputMaybe<StringQueryOperatorInput>;
  minutes?: InputMaybe<StringQueryOperatorInput>;
  month?: InputMaybe<StringQueryOperatorInput>;
  seconds?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<DateQueryOperatorInput>;
};

export type Internal__EventsEventsFilterInput = {
  all_day?: InputMaybe<BooleanQueryOperatorInput>;
  alternative_id?: InputMaybe<IntQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  categories?: InputMaybe<Internal__EventsEventsCategoriesFilterListInput>;
  cost?: InputMaybe<StringQueryOperatorInput>;
  cost_details?: InputMaybe<Internal__EventsEventsCost_DetailsFilterInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  date_utc?: InputMaybe<DateQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  end_date?: InputMaybe<DateQueryOperatorInput>;
  end_date_details?: InputMaybe<Internal__EventsEventsEnd_Date_DetailsFilterInput>;
  excerpt?: InputMaybe<StringQueryOperatorInput>;
  featured?: InputMaybe<BooleanQueryOperatorInput>;
  global_id?: InputMaybe<StringQueryOperatorInput>;
  global_id_lineage?: InputMaybe<StringQueryOperatorInput>;
  hide_from_listings?: InputMaybe<BooleanQueryOperatorInput>;
  image?: InputMaybe<BooleanQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modified_utc?: InputMaybe<DateQueryOperatorInput>;
  rest_url?: InputMaybe<StringQueryOperatorInput>;
  show_map?: InputMaybe<BooleanQueryOperatorInput>;
  show_map_link?: InputMaybe<BooleanQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  start_date?: InputMaybe<DateQueryOperatorInput>;
  start_date_details?: InputMaybe<Internal__EventsEventsStart_Date_DetailsFilterInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  sticky?: InputMaybe<BooleanQueryOperatorInput>;
  timezone?: InputMaybe<StringQueryOperatorInput>;
  timezone_abbr?: InputMaybe<StringQueryOperatorInput>;
  title?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  utc_end_date?: InputMaybe<DateQueryOperatorInput>;
  utc_end_date_details?: InputMaybe<Internal__EventsEventsUtc_End_Date_DetailsFilterInput>;
  utc_start_date?: InputMaybe<DateQueryOperatorInput>;
  utc_start_date_details?: InputMaybe<Internal__EventsEventsUtc_Start_Date_DetailsFilterInput>;
  venue?: InputMaybe<Internal__EventsEventsVenueFilterInput>;
  website?: InputMaybe<StringQueryOperatorInput>;
};

export type Internal__EventsEventsFilterListInput = {
  elemMatch?: InputMaybe<Internal__EventsEventsFilterInput>;
};

export type Internal__EventsEventsStart_Date_Details = {
  __typename?: 'internal__eventsEventsStart_date_details';
  day?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  seconds?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};


export type Internal__EventsEventsStart_Date_DetailsYearArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsStart_Date_DetailsFilterInput = {
  day?: InputMaybe<StringQueryOperatorInput>;
  hour?: InputMaybe<StringQueryOperatorInput>;
  minutes?: InputMaybe<StringQueryOperatorInput>;
  month?: InputMaybe<StringQueryOperatorInput>;
  seconds?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<DateQueryOperatorInput>;
};

export type Internal__EventsEventsUtc_End_Date_Details = {
  __typename?: 'internal__eventsEventsUtc_end_date_details';
  day?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  seconds?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};


export type Internal__EventsEventsUtc_End_Date_DetailsYearArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsUtc_End_Date_DetailsFilterInput = {
  day?: InputMaybe<StringQueryOperatorInput>;
  hour?: InputMaybe<StringQueryOperatorInput>;
  minutes?: InputMaybe<StringQueryOperatorInput>;
  month?: InputMaybe<StringQueryOperatorInput>;
  seconds?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<DateQueryOperatorInput>;
};

export type Internal__EventsEventsUtc_Start_Date_Details = {
  __typename?: 'internal__eventsEventsUtc_start_date_details';
  day?: Maybe<Scalars['String']>;
  hour?: Maybe<Scalars['String']>;
  minutes?: Maybe<Scalars['String']>;
  month?: Maybe<Scalars['String']>;
  seconds?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Date']>;
};


export type Internal__EventsEventsUtc_Start_Date_DetailsYearArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsUtc_Start_Date_DetailsFilterInput = {
  day?: InputMaybe<StringQueryOperatorInput>;
  hour?: InputMaybe<StringQueryOperatorInput>;
  minutes?: InputMaybe<StringQueryOperatorInput>;
  month?: InputMaybe<StringQueryOperatorInput>;
  seconds?: InputMaybe<StringQueryOperatorInput>;
  year?: InputMaybe<DateQueryOperatorInput>;
};

export type Internal__EventsEventsVenue = {
  __typename?: 'internal__eventsEventsVenue';
  alternative_id?: Maybe<Scalars['Int']>;
  author?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  date?: Maybe<Scalars['Date']>;
  date_utc?: Maybe<Scalars['Date']>;
  global_id?: Maybe<Scalars['String']>;
  global_id_lineage?: Maybe<Array<Maybe<Scalars['String']>>>;
  modified?: Maybe<Scalars['Date']>;
  modified_utc?: Maybe<Scalars['Date']>;
  show_map?: Maybe<Scalars['Boolean']>;
  show_map_link?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  venue?: Maybe<Scalars['String']>;
};


export type Internal__EventsEventsVenueDateArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsVenueDate_UtcArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsVenueModifiedArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};


export type Internal__EventsEventsVenueModified_UtcArgs = {
  difference?: InputMaybe<Scalars['String']>;
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Internal__EventsEventsVenueFilterInput = {
  alternative_id?: InputMaybe<IntQueryOperatorInput>;
  author?: InputMaybe<StringQueryOperatorInput>;
  country?: InputMaybe<StringQueryOperatorInput>;
  date?: InputMaybe<DateQueryOperatorInput>;
  date_utc?: InputMaybe<DateQueryOperatorInput>;
  global_id?: InputMaybe<StringQueryOperatorInput>;
  global_id_lineage?: InputMaybe<StringQueryOperatorInput>;
  modified?: InputMaybe<DateQueryOperatorInput>;
  modified_utc?: InputMaybe<DateQueryOperatorInput>;
  show_map?: InputMaybe<BooleanQueryOperatorInput>;
  show_map_link?: InputMaybe<BooleanQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  status?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  venue?: InputMaybe<StringQueryOperatorInput>;
};

export enum Internal__EventsFieldsEnum {
  Children = 'children',
  ChildrenChildren = 'children___children',
  ChildrenChildrenChildren = 'children___children___children',
  ChildrenChildrenChildrenChildren = 'children___children___children___children',
  ChildrenChildrenChildrenId = 'children___children___children___id',
  ChildrenChildrenId = 'children___children___id',
  ChildrenChildrenInternalContent = 'children___children___internal___content',
  ChildrenChildrenInternalContentDigest = 'children___children___internal___contentDigest',
  ChildrenChildrenInternalDescription = 'children___children___internal___description',
  ChildrenChildrenInternalFieldOwners = 'children___children___internal___fieldOwners',
  ChildrenChildrenInternalIgnoreType = 'children___children___internal___ignoreType',
  ChildrenChildrenInternalMediaType = 'children___children___internal___mediaType',
  ChildrenChildrenInternalOwner = 'children___children___internal___owner',
  ChildrenChildrenInternalType = 'children___children___internal___type',
  ChildrenChildrenParentChildren = 'children___children___parent___children',
  ChildrenChildrenParentId = 'children___children___parent___id',
  ChildrenId = 'children___id',
  ChildrenInternalContent = 'children___internal___content',
  ChildrenInternalContentDigest = 'children___internal___contentDigest',
  ChildrenInternalDescription = 'children___internal___description',
  ChildrenInternalFieldOwners = 'children___internal___fieldOwners',
  ChildrenInternalIgnoreType = 'children___internal___ignoreType',
  ChildrenInternalMediaType = 'children___internal___mediaType',
  ChildrenInternalOwner = 'children___internal___owner',
  ChildrenInternalType = 'children___internal___type',
  ChildrenParentChildren = 'children___parent___children',
  ChildrenParentChildrenChildren = 'children___parent___children___children',
  ChildrenParentChildrenId = 'children___parent___children___id',
  ChildrenParentId = 'children___parent___id',
  ChildrenParentInternalContent = 'children___parent___internal___content',
  ChildrenParentInternalContentDigest = 'children___parent___internal___contentDigest',
  ChildrenParentInternalDescription = 'children___parent___internal___description',
  ChildrenParentInternalFieldOwners = 'children___parent___internal___fieldOwners',
  ChildrenParentInternalIgnoreType = 'children___parent___internal___ignoreType',
  ChildrenParentInternalMediaType = 'children___parent___internal___mediaType',
  ChildrenParentInternalOwner = 'children___parent___internal___owner',
  ChildrenParentInternalType = 'children___parent___internal___type',
  ChildrenParentParentChildren = 'children___parent___parent___children',
  ChildrenParentParentId = 'children___parent___parent___id',
  Events = 'events',
  EventsAllDay = 'events___all_day',
  EventsAlternativeId = 'events___alternative_id',
  EventsAuthor = 'events___author',
  EventsCategories = 'events___categories',
  EventsCategoriesAlternativeId = 'events___categories___alternative_id',
  EventsCategoriesAlternativeParent = 'events___categories___alternative_parent',
  EventsCategoriesCount = 'events___categories___count',
  EventsCategoriesDescription = 'events___categories___description',
  EventsCategoriesFilter = 'events___categories___filter',
  EventsCategoriesName = 'events___categories___name',
  EventsCategoriesSlug = 'events___categories___slug',
  EventsCategoriesTaxonomy = 'events___categories___taxonomy',
  EventsCategoriesTermGroup = 'events___categories___term_group',
  EventsCategoriesTermTaxonomyId = 'events___categories___term_taxonomy_id',
  EventsCategoriesUrlsCollection = 'events___categories___urls___collection',
  EventsCategoriesUrlsSelf = 'events___categories___urls___self',
  EventsCategoriesUrlsUp = 'events___categories___urls___up',
  EventsCost = 'events___cost',
  EventsCostDetailsCurrencyCode = 'events___cost_details___currency_code',
  EventsCostDetailsCurrencyPosition = 'events___cost_details___currency_position',
  EventsCostDetailsCurrencySymbol = 'events___cost_details___currency_symbol',
  EventsDate = 'events___date',
  EventsDateUtc = 'events___date_utc',
  EventsDescription = 'events___description',
  EventsEndDate = 'events___end_date',
  EventsEndDateDetailsDay = 'events___end_date_details___day',
  EventsEndDateDetailsHour = 'events___end_date_details___hour',
  EventsEndDateDetailsMinutes = 'events___end_date_details___minutes',
  EventsEndDateDetailsMonth = 'events___end_date_details___month',
  EventsEndDateDetailsSeconds = 'events___end_date_details___seconds',
  EventsEndDateDetailsYear = 'events___end_date_details___year',
  EventsExcerpt = 'events___excerpt',
  EventsFeatured = 'events___featured',
  EventsGlobalId = 'events___global_id',
  EventsGlobalIdLineage = 'events___global_id_lineage',
  EventsHideFromListings = 'events___hide_from_listings',
  EventsImage = 'events___image',
  EventsModified = 'events___modified',
  EventsModifiedUtc = 'events___modified_utc',
  EventsRestUrl = 'events___rest_url',
  EventsShowMap = 'events___show_map',
  EventsShowMapLink = 'events___show_map_link',
  EventsSlug = 'events___slug',
  EventsStartDate = 'events___start_date',
  EventsStartDateDetailsDay = 'events___start_date_details___day',
  EventsStartDateDetailsHour = 'events___start_date_details___hour',
  EventsStartDateDetailsMinutes = 'events___start_date_details___minutes',
  EventsStartDateDetailsMonth = 'events___start_date_details___month',
  EventsStartDateDetailsSeconds = 'events___start_date_details___seconds',
  EventsStartDateDetailsYear = 'events___start_date_details___year',
  EventsStatus = 'events___status',
  EventsSticky = 'events___sticky',
  EventsTimezone = 'events___timezone',
  EventsTimezoneAbbr = 'events___timezone_abbr',
  EventsTitle = 'events___title',
  EventsUrl = 'events___url',
  EventsUtcEndDate = 'events___utc_end_date',
  EventsUtcEndDateDetailsDay = 'events___utc_end_date_details___day',
  EventsUtcEndDateDetailsHour = 'events___utc_end_date_details___hour',
  EventsUtcEndDateDetailsMinutes = 'events___utc_end_date_details___minutes',
  EventsUtcEndDateDetailsMonth = 'events___utc_end_date_details___month',
  EventsUtcEndDateDetailsSeconds = 'events___utc_end_date_details___seconds',
  EventsUtcEndDateDetailsYear = 'events___utc_end_date_details___year',
  EventsUtcStartDate = 'events___utc_start_date',
  EventsUtcStartDateDetailsDay = 'events___utc_start_date_details___day',
  EventsUtcStartDateDetailsHour = 'events___utc_start_date_details___hour',
  EventsUtcStartDateDetailsMinutes = 'events___utc_start_date_details___minutes',
  EventsUtcStartDateDetailsMonth = 'events___utc_start_date_details___month',
  EventsUtcStartDateDetailsSeconds = 'events___utc_start_date_details___seconds',
  EventsUtcStartDateDetailsYear = 'events___utc_start_date_details___year',
  EventsVenueAlternativeId = 'events___venue___alternative_id',
  EventsVenueAuthor = 'events___venue___author',
  EventsVenueCountry = 'events___venue___country',
  EventsVenueDate = 'events___venue___date',
  EventsVenueDateUtc = 'events___venue___date_utc',
  EventsVenueGlobalId = 'events___venue___global_id',
  EventsVenueGlobalIdLineage = 'events___venue___global_id_lineage',
  EventsVenueModified = 'events___venue___modified',
  EventsVenueModifiedUtc = 'events___venue___modified_utc',
  EventsVenueShowMap = 'events___venue___show_map',
  EventsVenueShowMapLink = 'events___venue___show_map_link',
  EventsVenueSlug = 'events___venue___slug',
  EventsVenueStatus = 'events___venue___status',
  EventsVenueUrl = 'events___venue___url',
  EventsVenueVenue = 'events___venue___venue',
  EventsWebsite = 'events___website',
  Id = 'id',
  InternalContent = 'internal___content',
  InternalContentDigest = 'internal___contentDigest',
  InternalDescription = 'internal___description',
  InternalFieldOwners = 'internal___fieldOwners',
  InternalIgnoreType = 'internal___ignoreType',
  InternalMediaType = 'internal___mediaType',
  InternalOwner = 'internal___owner',
  InternalType = 'internal___type',
  NextRestUrl = 'next_rest_url',
  ParentChildren = 'parent___children',
  ParentChildrenChildren = 'parent___children___children',
  ParentChildrenChildrenChildren = 'parent___children___children___children',
  ParentChildrenChildrenId = 'parent___children___children___id',
  ParentChildrenId = 'parent___children___id',
  ParentChildrenInternalContent = 'parent___children___internal___content',
  ParentChildrenInternalContentDigest = 'parent___children___internal___contentDigest',
  ParentChildrenInternalDescription = 'parent___children___internal___description',
  ParentChildrenInternalFieldOwners = 'parent___children___internal___fieldOwners',
  ParentChildrenInternalIgnoreType = 'parent___children___internal___ignoreType',
  ParentChildrenInternalMediaType = 'parent___children___internal___mediaType',
  ParentChildrenInternalOwner = 'parent___children___internal___owner',
  ParentChildrenInternalType = 'parent___children___internal___type',
  ParentChildrenParentChildren = 'parent___children___parent___children',
  ParentChildrenParentId = 'parent___children___parent___id',
  ParentId = 'parent___id',
  ParentInternalContent = 'parent___internal___content',
  ParentInternalContentDigest = 'parent___internal___contentDigest',
  ParentInternalDescription = 'parent___internal___description',
  ParentInternalFieldOwners = 'parent___internal___fieldOwners',
  ParentInternalIgnoreType = 'parent___internal___ignoreType',
  ParentInternalMediaType = 'parent___internal___mediaType',
  ParentInternalOwner = 'parent___internal___owner',
  ParentInternalType = 'parent___internal___type',
  ParentParentChildren = 'parent___parent___children',
  ParentParentChildrenChildren = 'parent___parent___children___children',
  ParentParentChildrenId = 'parent___parent___children___id',
  ParentParentId = 'parent___parent___id',
  ParentParentInternalContent = 'parent___parent___internal___content',
  ParentParentInternalContentDigest = 'parent___parent___internal___contentDigest',
  ParentParentInternalDescription = 'parent___parent___internal___description',
  ParentParentInternalFieldOwners = 'parent___parent___internal___fieldOwners',
  ParentParentInternalIgnoreType = 'parent___parent___internal___ignoreType',
  ParentParentInternalMediaType = 'parent___parent___internal___mediaType',
  ParentParentInternalOwner = 'parent___parent___internal___owner',
  ParentParentInternalType = 'parent___parent___internal___type',
  ParentParentParentChildren = 'parent___parent___parent___children',
  ParentParentParentId = 'parent___parent___parent___id',
  PreviousRestUrl = 'previous_rest_url',
  RestUrl = 'rest_url',
  Total = 'total',
  TotalPages = 'total_pages'
}

export type Internal__EventsFilterInput = {
  children?: InputMaybe<NodeFilterListInput>;
  events?: InputMaybe<Internal__EventsEventsFilterListInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  internal?: InputMaybe<InternalFilterInput>;
  next_rest_url?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  previous_rest_url?: InputMaybe<StringQueryOperatorInput>;
  rest_url?: InputMaybe<StringQueryOperatorInput>;
  total?: InputMaybe<IntQueryOperatorInput>;
  total_pages?: InputMaybe<IntQueryOperatorInput>;
};

export type Internal__EventsGroupConnection = {
  __typename?: 'internal__eventsGroupConnection';
  distinct: Array<Scalars['String']>;
  edges: Array<Internal__EventsEdge>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
  group: Array<Internal__EventsGroupConnection>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  nodes: Array<Internal__Events>;
  pageInfo: PageInfo;
  sum?: Maybe<Scalars['Float']>;
  totalCount: Scalars['Int'];
};


export type Internal__EventsGroupConnectionDistinctArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsGroupConnectionGroupArgs = {
  field: Internal__EventsFieldsEnum;
  limit?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type Internal__EventsGroupConnectionMaxArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsGroupConnectionMinArgs = {
  field: Internal__EventsFieldsEnum;
};


export type Internal__EventsGroupConnectionSumArgs = {
  field: Internal__EventsFieldsEnum;
};

export type Internal__EventsSortInput = {
  fields?: InputMaybe<Array<InputMaybe<Internal__EventsFieldsEnum>>>;
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>;
};
