const getPermissions = (state) => state.app.user && state.app.user.permissions;

const getters = {
  canEditNote: (state) => getPermissions(state) && state.app.user.permissions.editNote,
  canEditConfig: (state) => getPermissions(state) && state.app.user.permissions.editConfig,
  canViewStatistics: (state) => getPermissions(state) && state.app.user.permissions.viewStatistics,
  newWorkspace: (state) => getPermissions(state) && state.app.user.permissions.newWorkspace,
  canClassify: (state) => getPermissions(state) && state.app.user.permissions.classify,
  canTrain: (state) => getPermissions(state) && state.app.user.permissions.train,
  canTest: (state) => getPermissions(state) && state.app.user.permissions.test,
  canValidate: (state) => getPermissions(state) && state.app.user.permissions.validate,
};
export default getters;
