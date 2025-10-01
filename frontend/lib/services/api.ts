import { Effect, Context } from "effect";

// Define types for our domain
export interface Share {
  id: string;
  title: string;
  codeType: "strudel" | "tidalcycles";
  code: string;
  author: string;
  createdAt: string;
  audioUrl?: string;
}

export interface CreateShareRequest {
  title: string;
  codeType: "strudel" | "tidalcycles";
  code: string;
  audioFile?: File;
}

// Define the API service interface
export interface ApiService {
  getShares: () => Effect.Effect<Share[], Error>;
  createShare: (request: CreateShareRequest) => Effect.Effect<Share, Error>;
  getShare: (id: string) => Effect.Effect<Share, Error>;
}

// Create a Tag for the service
export const ApiService = Context.GenericTag<ApiService>("ApiService");

// Implementation of the API service using fetch
export const ApiServiceLive: ApiService = {
  getShares: () =>
    Effect.tryPromise({
      try: async () => {
        const response = await fetch("http://localhost:3001/api/shares");
        if (!response.ok) {
          throw new Error("Failed to fetch shares");
        }
        return await response.json();
      },
      catch: (error) => new Error(String(error)),
    }),

  createShare: (request: CreateShareRequest) =>
    Effect.tryPromise({
      try: async () => {
        const formData = new FormData();
        formData.append("title", request.title);
        formData.append("codeType", request.codeType);
        formData.append("code", request.code);
        if (request.audioFile) {
          formData.append("audio", request.audioFile);
        }

        const response = await fetch("http://localhost:3001/api/shares", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error("Failed to create share");
        }

        return await response.json();
      },
      catch: (error) => new Error(String(error)),
    }),

  getShare: (id: string) =>
    Effect.tryPromise({
      try: async () => {
        const response = await fetch(`http://localhost:3001/api/shares/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch share");
        }
        return await response.json();
      },
      catch: (error) => new Error(String(error)),
    }),
};

// Helper to provide the live service
export const provideApiService = <A, E>(
  effect: Effect.Effect<A, E, ApiService>
): Effect.Effect<A, E> => Effect.provideService(effect, ApiService, ApiServiceLive);
