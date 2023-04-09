export const breadthFirstSearch = (
  relationships: number[][],
  startUser: number,
  targetUser: number
): number => {
  const queue: number[][] = [[startUser]];
  const alreadySearchedUsers: number[] = [];
  let result = 0

  while (queue.length > 0) {
    // console.log("queue: ", queue)
    const userArray: number[] | undefined = queue.shift();

    if (userArray) {
      let count = 0
      for (const user of userArray) {
        if (!alreadySearchedUsers.includes(user)) {
          alreadySearchedUsers.push(user)
          count += 1
        }
      }
      if (count == 0) {
        return -1
      }

      for (const user of userArray) {
        for (const friend of relationships[user]) {
          if (friend == targetUser) {
            return result + 1
          }
        }
        queue.push(relationships[user])
      }
      result += 1
    }
  }
  return -1
};
