/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */
import React, { Fragment } from 'react';
import { EuiFieldText, EuiFormRow, EuiSwitch } from '@elastic/eui';
import { FormattedMessage } from '@kbn/i18n/react';
import { i18n } from '@kbn/i18n';
import {
  ActionTypeModel,
  Props,
  Action,
  ValidationResult,
  ActionParamsProps,
} from '../../../../types';
import { ErrableFormRow } from '../../../components/page_error';

export function getActionType(): ActionTypeModel {
  return {
    id: '.index',
    iconClass: 'indexOpen',
    selectMessage: i18n.translate(
      'xpack.alertingUI.sections.actionAdd.indexAction.selectMessageText',
      {
        defaultMessage: 'Index data into Elasticsearch.',
      }
    ),
    validate: (): ValidationResult => {
      return { errors: {} };
    },
    actionFields: IndexActionFields,
    actionParamsFields: IndexParamsFields,
    validateParams: (action: Action): ValidationResult => {
      const validationResult = { errors: {} };
      return validationResult;
    },
  };
}

const IndexActionFields: React.FunctionComponent<Props> = ({ action, editActionConfig }) => {
  const { index } = action.config;
  return (
    <EuiFormRow
      fullWidth
      label={i18n.translate('xpack.alertingUI.sections.actionAdd.indexAction.indexTextFieldLabel', {
        defaultMessage: 'Index (optional)',
      })}
    >
      <EuiFieldText
        fullWidth
        name="index"
        data-test-subj="indexInput"
        value={index || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          editActionConfig('index', e.target.value);
        }}
        onBlur={() => {
          if (!index) {
            editActionConfig('index', '');
          }
        }}
      />
    </EuiFormRow>
  );
};

const IndexParamsFields: React.FunctionComponent<ActionParamsProps> = ({
  action,
  index,
  editAction,
  errors,
  hasErrors,
}) => {
  const { refresh, executionTimeField, documents } = action;
  return (
    <Fragment>
      <ErrableFormRow
        id="indexName"
        errorKey="index"
        fullWidth
        errors={errors}
        isShowingErrors={hasErrors === true && action.index !== undefined}
        label={i18n.translate('xpack.alertingUI.sections.actionAdd.indexAction.indexFieldLabel', {
          defaultMessage: 'Index',
        })}
      >
        <EuiFieldText
          fullWidth
          name="index"
          data-test-subj="indexInput"
          value={action.index || ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            editAction('index', e.target.value, index);
          }}
          onBlur={() => {
            if (!action.index) {
              editAction('index', '', index);
            }
          }}
        />
      </ErrableFormRow>
      <EuiSwitch
        data-test-subj="saveAsNewCheckbox"
        checked={refresh}
        onChange={(e: any) => {
          editAction('refresh', e.target.checked, index);
        }}
        label={
          <FormattedMessage
            id="xpack.alertingUI.sections.actionAdd.indexAction.refreshLabel"
            defaultMessage="Refresh"
          />
        }
      />
    </Fragment>
  );
};
