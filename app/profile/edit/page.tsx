import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Upload } from "lucide-react"
import Link from "next/link"

export default function ProfileEditPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Edit Profile</h1>
            <p className="text-muted-foreground">Update your profile information and preferences.</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Profile Information</CardTitle>
              <CardDescription>This information will be displayed publicly on your profile.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <Avatar className="h-24 w-24">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                    alt="Profile"
                  />
                  <AvatarFallback>DM</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-medium mb-2">Profile Photo</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    This will be displayed on your profile and in comments.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Upload className="h-4 w-4 mr-2" />
                      Upload New
                    </Button>
                    <Button variant="outline" size="sm">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" defaultValue="David Mwangi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="davidmwangi" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Textarea
                    id="bio"
                    rows={4}
                    defaultValue="Blockchain developer and educator focused on Hedera adoption in East Africa. Building decentralized solutions for real-world problems."
                  />
                  <p className="text-xs text-muted-foreground">
                    Brief description for your profile. Maximum 160 characters.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" defaultValue="Nairobi, Kenya" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" defaultValue="https://davidmwangi.dev" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter Username</Label>
                    <Input id="twitter" defaultValue="davidmwangi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Username</Label>
                    <Input id="github" defaultValue="davidmwangi" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hederaAccountId">Hedera Account ID</Label>
                  <Input id="hederaAccountId" defaultValue="0.0.12345" />
                  <p className="text-xs text-muted-foreground">Your Hedera account ID for receiving rewards.</p>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" asChild>
                <Link href="/davidmwangi">Cancel</Link>
              </Button>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} HederaConnect. Powered by Hedera Hashgraph.</p>
        </div>
      </footer>
    </div>
  )
}

