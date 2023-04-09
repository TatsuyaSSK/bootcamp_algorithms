export interface FileSystemNode {
  name: string;
  filePath: string;
  isDirectory: boolean;
  children: FileSystemNode[];
}

export const depthFirstSearch = (
  root: FileSystemNode,
  target: string
): boolean | string => {
  const stack: FileSystemNode[] = [root];

  while (stack.length > 0) {
    const node: FileSystemNode | undefined = stack.pop();
    if (node) {
      for (const child of node.children) {
        if (child.name == target && !child.isDirectory) {
          return node.filePath + "/" + child.name
        }
        else {
          child.filePath = node.name + "/" + child.name
          stack.push(child)
        }
      } 
    }
  }
  return false
};