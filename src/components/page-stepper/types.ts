export interface PageStepperProps {
  currentPage: number | string;
  lastPage: number | string;
  prevPage?: () => void;
  nextPage?: () => void;
}
