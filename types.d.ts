interface AssessmentType {
  _id: string;
  createdAt: string;
  topic: string;
  difficulty: string;
  staffName: string;
}

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

interface QuestionWithAnsType {
  question: string;
  correct: string;
  answer: string;
}

interface githubRepoType {
  html_url: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  name: string;
  visibility: string;
  description: string;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  updated_at: string;
  languages: object;
  sum: number;
}

interface ProjectInputType {
  [key: string]: {
    name: string;
    description: string;
  };
}

interface EducationInputType {
  schoolName: string;
  schoolYear: string;
  collegeName: string;
  collegeYear: string;
}

interface ResumeTemplateProps {
  templatePriColor: string;
  downloadPdf: (ref: RefObject<HTMLDivElement>) => void;
  pdfRefs: any;
  templateSecColor?: string;
  projects: ProjectInputType;
  education: EducationInputType;
  userDetail: {
    name: string;
    email: string;
    skills: string[];
  };
}

interface TemplateColorProps {
  templatePriColor: string;
  setTemplatePriColor: (val: string) => void;
  templateSecColor: string;
  setTemplateSecColor: (val: string) => void;
  downloadPdf: () => void;
  currentTemplate: number;
  projects: ProjectType;
  setProject: (val: ProjectType) => void;
  education: EducationInputType;
  setEducation: (val: EducationInputType) => void;
  addProject: () => void;
  handleEducationInputChange: (key: string, value: string) => void;
  handleProjectInputChange: (i: number, type: string, value: string) => void;
}

interface RoadMapBoxType {
  title: string;
  link: string;
}

interface RoadMapDomainDetailsType {
  key?: number;
  index?: number;
  dataLength?: number;
  arrow?: "left" | "right";
  boxes1: RoadMapBoxType[];
  boxes2: RoadMapBoxType[];
  title: string;
  content: string;
  direction: "left" | "right" | "both" | "none";
  isLock?: boolean;
  topics?: any;
}

interface RoadMapType {
  domainCode: string;
  domainName: string;
  image: string;
  domainContent: string;
  domainDetails: RoadMapDomainDetailsType[];
}

interface LearningType {
  type: "fast" | "moderate" | "slow";
  title: string;
}

// Generate Comic Types

type ProjectionMode = "cartesian" | "spherical";

type CacheMode = "use" | "renew" | "ignore";

interface RenderRequest {
  prompt: string;

  // whether to use video segmentation
  // disabled (default)
  // firstframe: we only analyze the first frame
  // allframes: we analyze all the frames
  segmentation: "disabled" | "firstframe" | "allframes";

  // segmentation will only be executed if we have a non-empty list of actionnables
  // actionnables are names of things like "chest", "key", "tree", "chair" etc
  actionnables: string[];

  // note: this is the number of frames for Zeroscope,
  // which is currently configured to only output 3 seconds, so:
  // nbFrames=8 -> 1 sec
  // nbFrames=16 -> 2 sec
  // nbFrames=24 -> 3 sec
  nbFrames: number; // min: 1, max: 24

  nbSteps: number; // min: 1, max: 50

  seed: number;

  width: number; // fixed at 1024 for now
  height: number; // fixed at 512 for now

  // upscaling factor
  // 0: no upscaling
  // 1: no upscaling
  // 2: 2x larger
  // 3: 3x larger
  // 4x: 4x larger, up to 4096x4096 (warning: a PNG of this size can be 50 Mb!)
  upscalingFactor: number;

  projection: ProjectionMode;

  /**
   * Use turbo mode
   *
   * At the time of writing this will use SSD-1B + LCM
   * https://huggingface.co/spaces/jbilcke-hf/fast-image-server
   */
  turbo: boolean;

  cache: CacheMode;

  wait: boolean; // wait until the job is completed

  analyze: boolean; // analyze the image to generate a caption (optional)
}

interface ImageSegment {
  id: number;
  box: number[];
  color: number[];
  label: string;
  score: number;
}

type RenderedSceneStatus = "pending" | "completed" | "error";

interface RenderedScene {
  renderId: string;
  status: RenderedSceneStatus;
  assetUrl: string;
  alt: string;
  error: string;
  maskUrl: string;
  segments: ImageSegment[];
}

interface ImageAnalysisRequest {
  image: string; // in base64
  prompt: string;
}

interface ImageAnalysisResponse {
  result: string;
  error?: string;
}

type GeneratedPanel = {
  panel: number;
  instructions: string;
  caption: string;
};

type GeneratedPanels = GeneratedPanel[];

type LLMEngine =
  | "INFERENCE_API"
  | "INFERENCE_ENDPOINT"
  | "OPENAI"
  | "REPLICATE"
  | "GROQ";

type RenderingEngine =
  | "VIDEOCHAIN"
  | "OPENAI"
  | "REPLICATE"
  | "INFERENCE_API"
  | "INFERENCE_ENDPOINT";

type RenderingModelVendor = "SERVER" | "OPENAI" | "REPLICATE" | "HUGGINGFACE";

type PostVisibility =
  | "featured" // featured by admins
  | "trending" // top trending / received more than 10 upvotes
  | "normal"; // default visibility

type Post = {
  postId: string;
  appId: string;
  prompt: string;
  previewUrl: string;
  assetUrl: string;
  createdAt: string;
  visibility: PostVisibility;
  upvotes: number;
  downvotes: number;
};

type CreatePostResponse = {
  success?: boolean;
  error?: string;
  post: Post;
};

type GetAppPostsResponse = {
  success?: boolean;
  error?: string;
  posts: Post[];
};

type GetAppPostResponse = {
  success?: boolean;
  error?: string;
  post: Post;
};

type LayoutProps = {
  page: number;
  nbPanels: number;
};

// TODO: rename the *Model fields to better indicate if this is a LLM or RENDER mdoel
type Settings = {
  renderingModelVendor: RenderingModelVendor;
  renderingUseTurbo: boolean;
  huggingFaceOAuth: string;
  huggingfaceApiKey: string;
  huggingfaceInferenceApiModel: string;
  huggingfaceInferenceApiModelTrigger: string;
  huggingfaceInferenceApiFileType: string;
  replicateApiKey: string;
  replicateApiModel: string;
  replicateApiModelVersion: string;
  replicateApiModelTrigger: string;
  openaiApiKey: string;
  openaiApiModel: string;
  openaiApiLanguageModel: string;
  groqApiKey: string;
  groqApiLanguageModel: string;
  hasGeneratedAtLeastOnce: boolean;
  userDefinedMaxNumberOfPages: number;
};

type DynamicConfig = {
  maxNbPages: number;
  nbPanelsPerPage: number;
  nbTotalPanelsToGenerate: number;
  oauthClientId: string;
  oauthRedirectUrl: string;
  oauthScopes: string;
  enableHuggingFaceOAuth: boolean;
  enableHuggingFaceOAuthWall: boolean;
};
