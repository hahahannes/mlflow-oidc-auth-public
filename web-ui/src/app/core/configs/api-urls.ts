export const API_URL = {
  ALL_EXPERIMENTS: 'api/2.0/mlflow/experiments',
  EXPERIMENTS_FOR_USER: 'api/2.0/mlflow/users/${userName}/experiments',
  USERS_FOR_EXPERIMENT: 'api/2.0/mlflow/experiments/${experimentName}/users',
  ALL_MODELS: 'api/2.0/mlflow/registered-models',
  ALL_GROUPS: 'api/2.0/mlflow/groups',
  EXPERIMENTS_FOR_GROUP: 'api/2.0/mlflow/groups/${groupName}/experiments',
  MODELS_FOR_GROUP: 'api/2.0/mlflow/groups/${groupName}/registered-models',
  MODELS_FOR_USER: 'api/2.0/mlflow/users/${userName}/registered-models',
  USERS_FOR_MODEL: 'api/2.0/mlflow/registered-models/${modelName}/users',
  CREATE_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/experiments/permissions/create',
  UPDATE_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/experiments/permissions/update',
  DELETE_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/experiments/permissions/delete',
  CREATE_MODEL_PERMISSION: 'api/2.0/mlflow/registered-models/permissions/create',
  UPDATE_MODEL_PERMISSION: 'api/2.0/mlflow/registered-models/permissions/update',
  DELETE_MODEL_PERMISSION: 'api/2.0/mlflow/registered-models/permissions/delete',

  GET_ALL_USERS: 'api/2.0/mlflow/users',
  GET_ACCESS_TOKEN: 'api/2.0/mlflow/users/access-token',
  GET_CURRENT_USER: 'api/2.0/mlflow/users/current',

  CREATE_GROUP_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/experiments/create',
  DELETE_GROUP_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/experiments/delete',
  UPDATE_GROUP_EXPERIMENT_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/experiments/update',

  CREATE_GROUP_MODEL_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/registered-models/create',
  DELETE_GROUP_MODEL_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/registered-models/delete',
  UPDATE_GROUP_MODEL_PERMISSION: 'api/2.0/mlflow/groups/${groupName}/registered-models/update',
};
