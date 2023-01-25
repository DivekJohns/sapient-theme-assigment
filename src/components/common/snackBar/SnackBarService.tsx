import React, { ReactElement } from 'react';
import { Subject } from 'rxjs';

export enum SnackbarMessageTypes {
  Success = 1,
  Info = 2,
  Warn = 3,
  Error = 4,
}

export interface SnackbarMessage {
  message:  React.ReactElement;
  type: SnackbarMessageTypes;
  actions: ReactElement;
  timeOut?: number;
}

export const snackbarMessageStream = new Subject<SnackbarMessage>();

function info(message:  React.ReactElement, actions?: React.ReactElement, timeOut = 3000) {
  const nextMessage: SnackbarMessage = {
    message,
    type: SnackbarMessageTypes.Info,
    actions,
    timeOut,
  };
  snackbarMessageStream.next(nextMessage);
}

function error(message:  React.ReactElement, actions?: React.ReactElement, timeOut = 4000) {
  const nextMessage: SnackbarMessage = {
    message,
    type: SnackbarMessageTypes.Error,
    actions,
    timeOut,
  };
  snackbarMessageStream.next(nextMessage);
}

function warn(message:  React.ReactElement, actions?: React.ReactElement, timeOut = 3000) {
  const nextMessage: SnackbarMessage = {
    message,
    type: SnackbarMessageTypes.Warn,
    actions,
    timeOut,
  };
  snackbarMessageStream.next(nextMessage);
}

function success(message:  React.ReactElement, actions?: React.ReactElement, timeOut = 3000) {
  const nextMessage: SnackbarMessage = {
    message,
    type: SnackbarMessageTypes.Success,
    actions,
    timeOut,
  };
  snackbarMessageStream.next(nextMessage);
}

export default { info, success, warn, error };
