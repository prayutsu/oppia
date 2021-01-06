// Copyright 2019 The Oppia Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview End-to-end tests for the functionality of the statistics tabs
 * in the exploration editor.
 */

var ExplorationEditorImprovementsTab = function() {
  /*
   * Interactive elements
   */
  const explorationHealth = $('.protractor-test-improvements-tab-health');

  this.expectToBeHidden = async function() {
    expect(await $$('.protractor-test-improvements-tab').count()).toEqual(0);
  };

  this.expectHealthyExploration = async function() {
    await waitFor.visibilityOf(
      this.explorationHealth,
      'Exploration health taking too long to appear'
    );
    expect(await explorationHealth.getText()).toEqual('HEALTHY');
  };
  this.expectWarningExploration = async function() {
    await waitFor.visibilityOf(
      this.expectWarningExploration,
      'Exploration health too long to appear'
    );
    expect(await explorationHealth.getText()).toEqual("WARNING");
  };
  this.expectCriticalExploration = async function() {
    await waitFor.visibilityOf(
      this.expectCriticalExploration,
      'Exploration health taking too long to appear'
    );
    expect(await explorationHealth.getText()).toEqual('CRITICAL');
  };
};

exports.ExplorationEditorImprovementsTab = ExplorationEditorImprovementsTab;
