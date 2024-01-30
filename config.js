// Server configuration
export const SERVER_PORT = 3000; // Server port
export const DEBUG = false; // Debug mode

// Prompt Moderation before sending to OpenAI
export const MODERATION = true; // Moderation mode

// Rate limit
export const PRIOD = 15 * 1000; // 15 seconds
export const RATE_LIMIT = 50; // 50 requests per 15 seconds

// Whitelisted IPs
export const WHITELISTED_IPS = [
    // "127.0.0.1"
];

// OpenAI API Keys
export let OPENAI_KEYS = [
    "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJydHJvbXA0QGxpYmVydHkuZWR1IiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsicG9pZCI6Im9yZy0zcHRZdmNpeVU5bFpZNVg1TVhjRXpuM3IiLCJ1c2VyX2lkIjoidXNlci1LS1lSUkhhUEljQ2FhcDF5U0dua25IZTEifSwiaXNzIjoiaHR0cHM6Ly9hdXRoMC5vcGVuYWkuY29tLyIsInN1YiI6ImF1dGgwfDY1YWZmNDU1YTgyOTkwOWQzMWNkNjAzOCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE3MDYwMzAzNTUsImV4cCI6MTcwNjg5NDM1NSwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvcmdhbml6YXRpb24ud3JpdGUgb2ZmbGluZV9hY2Nlc3MifQ.tibTTe4bKlct89jwpjMaBZK-w5vPqy1N9PmUxX_dRU0TfMlvnSx_6RM7mrHtuy_0Ex6o0IR557Zay0e9GlwI75kiPIZgq9j7Ve4vS9yRCV3Kgdu0t4VIeeTfp0jltydqG-xfhtRbEfnG11DecFuqLPlx2JIpD3YnzzRdALydwHZ0-UHRWrXMDGswOL4R4U1OxEGYBZ04RXdZTCPDJ-djo5RRBsXINvtlzmrLaLPihNRaNgfNNtlMc8IOyHdYc9fijz1b-NNMka9L05elv80cETHk6FqBYS5KsxLmfXTFnxBvkILMZUOglvgd1MAXsKxXdzAPqely1g9WuTj6bIbp6g",
];
