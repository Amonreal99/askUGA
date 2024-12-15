import { SessionProvider } from 'next-auth/react';
import Comment from '../../components/Reply/Reply';

export default function Reply() {
  return <SessionProvider><Comment/></SessionProvider>;
}