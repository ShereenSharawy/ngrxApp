import {createReducer, on} from '@ngrx/store';
import {loadPhotosSuccess, updatePhotoSuccess} from '../actions/photo.actions';
import {Photo} from '../../gallery/models/photo.model';

export const photoFeatureKey = 'photo';
export interface PhotoState {
    [id: string]: Photo;
  }
  export interface PhotoRootState {
    [photoFeatureKey]: PhotoState;
  }
  const initialState: PhotoState = {};
  export const photoReducer = createReducer(
    initialState,
    on(updatePhotoSuccess, (state, {photo}) => ({
      ...state,
      [photo.id]: photo
    })),
    on(loadPhotosSuccess, (state, {photos}) => photos.reduce((acc, photo) => ({
      ...acc,
      [photo.id]: photo
    }), {}))
  );