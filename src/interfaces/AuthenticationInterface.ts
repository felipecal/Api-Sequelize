export default interface AuthenticationResponse {
  success: boolean;
  token?: string;
  type?: { [key: string]: string };
  message?: string;
}
