
// create schoolform 

export interface SchoolFormDataInterface {
  cover_image?: File | null;
  created_by: string | undefined;
  name: string;
  description: string;
  category_id: string[]; // Assuming selectedTags is an array of strings
}


//school list data

export interface SchoolListDataInterface {
  success: boolean;
  data:    AllDatum[];
  message: string;
}

export interface AllDatum {
  id:             number;
  created_at:     Date;
  updated_at:     Date;
  deleted_at:     null;
  created_by:     number;
  name:           string;
  description:    string;
  posts_count:    number;
  documents:      Documents;
  advertisements: Advertisement[];
}

export interface Advertisement {
  id:         number;
  name:       string;
  school_id:  number;
  url:        string;
  type:       string;
  desc:       null;
  active:     boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  documents:  Documents;
}

export interface Documents {
  id:         number;
  parent_id:  number;
  type:       string;
  sub_type:   null;
  file_path:  string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
}



export interface SchoollistDataInterface {
  success: boolean;
  data:    DataBySchoolId;
  message: string;
}

export interface DataBySchoolId {
  id:             number;
  created_at:     Date;
  updated_at:     Date;
  deleted_at:     null;
  created_by:     number;
  name:           string;
  description:    string;
  documents:      Documents;
  advertisements: Advertisement[];
}

export interface Advertisement {
  id:         number;
  name:       string;
  school_id:  number;
  url:        string;
  type:       string;
  desc:       null;
  active:     boolean;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  documents:  Documents;
}

export interface Documents {
  id:         number;
  parent_id:  number;
  type:       string;
  sub_type:   null;
  file_path:  string;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
}


export enum Name {
  School = 'school',
  Somthing = 'somthing',
}

// school details view page  post data list

export interface AllBlogsDataInterface {
  success: boolean;
  data: AllBlogsDatum[];
  message: string;
}

export interface AllBlogsDatum {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  school_id: number;
  author_id: number;
  title: string;
  subtitle: null;
  slug: string;
  content: string;
  page_image: null;
  meta_description: null;
  keywords: null;
  is_draft: boolean;
  published_at: null;
  section_id: null;
}

//school by id in detail view
export interface SchoolDetailsDataInterface {
  success: boolean;
  data: Data;
  message: string;
}

export interface Data {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  created_by: number;
  name: string;
  description: string;
}

/// get category data

export interface CategoriesDataInterface {
  success: boolean;
  data: CategoriesDatum[];
  message: string;
}

export interface CategoriesDatum {
  id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at: null;
  name: string;
  image: null;
}

//user info 

export interface UserInfoInterface {
  id:                number ;
  name:              string;
  email:             string;
  email_verified_at: Date;
  created_at:        Date;
  updated_at:        Date;
}


