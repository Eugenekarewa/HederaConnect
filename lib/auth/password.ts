import { randomBytes, scryptSync, timingSafeEqual } from "crypto"

// Hash a password with a random salt
export async function hashPassword(password: string): Promise<string> {
  // In a real app, use a proper password hashing library like bcrypt
  // This is a simplified version for demonstration
  const salt = randomBytes(16).toString("hex")
  const hash = scryptSync(password, salt, 64).toString("hex")
  return `${salt}:${hash}`
}

// Compare a password with a hash
export async function comparePasswords(password: string, storedHash: string): Promise<boolean> {
  // In a real app, use a proper password hashing library like bcrypt
  // This is a simplified version for demonstration
  const [salt, hash] = storedHash.split(":")
  const hashBuffer = Buffer.from(hash, "hex")
  const suppliedHashBuffer = scryptSync(password, salt, 64)

  return timingSafeEqual(hashBuffer, suppliedHashBuffer)
}

