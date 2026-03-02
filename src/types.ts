export interface API_RESULTS {
  informacion: Informacion;
  records: RecordItem[];
}

export interface Informacion {
  totalrecordsperquery: number;
  totalrecords: number;
  pages: number;
  page: number;
  next: string;
  responsetime: string;
}

export interface RecordItem {
  copyright: string | null;
  contextualtextcount: number;
  creditline: string;
  accesslevel: number;
  datecreated: string;
  lastpageviewed: string;
  classificationid: number;
  division: string;
  markscount: number;
  publicationcount: number;
  totaluniquepageviews: number;
  contact: string;
  colorcount: number;
  rank: number;
  id: number;
  state: string | null;
  verificationleveldescription: string;
  period: string | null;
  images: ImageItem[];
  worktypes: WorkType[];
  imagecount: number;
  totalpageviews: number;
  accessionyear: number;
  standardreferencenumber: string | null;
  signed: string | null;
  classification: string;
  relatedcount: number;
  verificationlevel: number;
  primaryimageurl: string;
  titlescount: number;
  peoplecount: number;
  style: string | null;
  lastupdate: string;
  commentary: string | null;
  periodid: number | null;
  technique: string | null;
  edition: string | null;
  description: string | null;
  medium: string | null;
  lendingpermissionlevel: number;
  title: string;
  accessionmethod: string;
  colors: ColorItem[];
  provenance: string | null;
  groupcount: number;
  dated: string | null;
  department: string;
  dateend: number;
  url: string;
  dateoffirstpageview: string;
  century: string | null;
  objectnumber: string;
  labeltext: string | null;
  datestart: number;
  culture: string;
  exhibitioncount: number;
  imagepermissionlevel: number;
  mediacount: number;
  objectid: number;
  technicalid: string | null;
  dimensions: string | null;
  seeAlso: SeeAlso[];
}

export interface ImageItem {
  date: string;
  copyright: string;
  imageid: number;
  idsid: number;
  format: string;
  description: string | null;
  technique: string | null;
  renditionnumber: string;
  displayorder: number;
  baseimageurl: string;
  alttext: string | null;
  width: number;
  publiccaption: string | null;
  iiifbaseuri: string;
  height: number;
}

export interface WorkType {
  worktypeid: string;
  worktype: string;
}

export interface ColorItem {
  color: string;
  spectrum: string;
  hue: string;
  percent: number;
  css3: string;
}

export interface SeeAlso {
  id: string;
  type: string;
  format: string;
  profile: string;
}
