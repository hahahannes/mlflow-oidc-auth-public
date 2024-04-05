import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(
    private readonly http: HttpClient,
  ) {
  }

  getCurrentUser() {
    return this.http.get<{ username: string }>('/api/2.0/mlflow/users/current');
  }

  getAccessKey() {
    return this.http.get<{ token: string }>('/api/2.0/mlflow/users/access-token', {});
  }

  getAllExperiments() {
    return this.http.get<{experiments: string[]}>('/api/2.0/mlflow/experiments');
  }

  getAllModels() {
    return this.http.get<{models: string[]}>('/api/2.0/mlflow/registered-models');
  }

  getAllUsers() {
    return this.http.get<{users: string[]}>('/api/2.0/mlflow/users');
  }

  getExperimentsForUser(userName: string) {
    return this.http.get<[]>(`/api/2.0/mlflow/users/${userName}/experiments`);
  }

  getModelsForUser(userName: string) {
    return this.http.get<[]>(`/api/2.0/mlflow/users/${userName}/registered-models`);
  }
}