import {
    describe,
    it,
    jest,
    expect,
  } from '@jest/globals'
import { handlePullRequestOpened } from './app.js';

describe('handlePullRequestOpened', () => {
    it('sends a message for a new PR', async () => {
      const octokit = {
        request: jest.fn().mockResolvedValue(),
      };
  
      const payload = {
        repository: {
          owner: { login: 'owner-login' },
          name: 'repo-name',
        },
        pull_request: { number: 42 },
      };
  
      await handlePullRequestOpened({ octokit, payload });
  
      expect(octokit.request).toHaveBeenCalledWith(
        'POST /repos/{owner}/{repo}/issues/{issue_number}/comments',
        {
          body: 'Valeu por criar essa PR! Siga os guidelines para essa PR entrar em review',
          headers: {
            'x-github-api-version': '2022-11-28',
          },
          issue_number: 42,
          owner: 'owner-login',
          repo: 'repo-name',
        }
      );
    });
  });
