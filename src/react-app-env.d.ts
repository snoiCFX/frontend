/// <reference types="react-scripts" />
interface WindowChain {
  conflux?: {
    isConfluxPortal?: true;
    send?: (method: string) => any;
  };
}
