export interface FileSystemNode {
  name: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): boolean => {
  const stack: FileSystemNode[] = [root];

  while (stack.length > 0) {
    const node: FileSystemNode | undefined = stack.pop();
    if (node) {
      for (const child of node.children) {
        if (child.name == target && !child.isDirectory) {
          return true
        }
        else {
          stack.push(child)
        }
      } 
    }
  }
  return false
};