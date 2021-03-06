/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

export default function ({ loadTestFile }) {
  describe('apis', function () {
    this.tags('ciGroup6');

    loadTestFile(require.resolve('./es'));
    loadTestFile(require.resolve('./security'));
    loadTestFile(require.resolve('./spaces'));
    loadTestFile(require.resolve('./monitoring'));
    loadTestFile(require.resolve('./xpack_main'));
    loadTestFile(require.resolve('./features'));
    loadTestFile(require.resolve('./telemetry'));
    loadTestFile(require.resolve('./logstash'));
    loadTestFile(require.resolve('./kibana'));
    loadTestFile(require.resolve('./metrics_ui'));
    loadTestFile(require.resolve('./beats'));
    loadTestFile(require.resolve('./console'));
    loadTestFile(require.resolve('./management'));
    loadTestFile(require.resolve('./uptime'));
    loadTestFile(require.resolve('./maps'));
    loadTestFile(require.resolve('./security_solution'));
    loadTestFile(require.resolve('./short_urls'));
    loadTestFile(require.resolve('./lens'));
    loadTestFile(require.resolve('./fleet'));
    loadTestFile(require.resolve('./ml'));
    loadTestFile(require.resolve('./transform'));
    loadTestFile(require.resolve('./endpoint'));
    loadTestFile(require.resolve('./ingest_manager'));
    loadTestFile(require.resolve('./lists'));
    loadTestFile(require.resolve('./upgrade_assistant'));
  });
}
