import { rest } from 'msw';
import { commitsResponse } from '../fixtures/commits';

export const baseUrl = `https://api.github.com`;

export const handlers = [
  rest.get(`${baseUrl}/repos/*/commits`, (_req, res, ctx) => {
    return res(ctx.json([...commitsResponse]));
  }),
];
