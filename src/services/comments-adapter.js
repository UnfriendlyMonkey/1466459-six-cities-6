export const commentsAdapterToClient = (comment) => {

  const user = comment.user;
  const adaptedUser = Object.assign(
      {},
      user,
      {
        avatarUrl: user.avatar_url,
        isPro: user.is_pro,
      }
  );

  delete adaptedUser.avatar_url;
  delete adaptedUser.is_pro;

  const adaptedComment = Object.assign(
      {},
      comment,
      {
        user: adaptedUser,
      }
  );

  return adaptedComment;
};
