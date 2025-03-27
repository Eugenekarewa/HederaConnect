import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Globe,
  Lightbulb,
  Building,
  GraduationCap,
  Handshake,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1489493512598-d08130f49bea?q=80&w=2071&auto=format&fit=crop"
              alt="East Africa landscape"
              fill
              priority
              className="object-cover brightness-[0.4]"
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl">
              <Badge
                variant="outline"
                className="mb-4 bg-background/20 backdrop-blur-sm"
              >
                Our Mission
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                Accelerating Hedera Adoption in East Africa
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl">
                HederaConnect is dedicated to fostering blockchain education,
                innovation, and adoption across East Africa, empowering the next
                generation of developers and entrepreneurs.
              </p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
        </section>

        {/* About Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Bridging the Knowledge Gap
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Despite the immense potential of blockchain technology to
                transform economies in East Africa, there remains a significant
                knowledge gap that hinders widespread adoption. HederaConnect
                was founded with a clear mission: to make Hedera Hashgraph
                technology accessible, understandable, and applicable to the
                unique challenges and opportunities in the region.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                By aggregating educational content, fostering community
                engagement, and incentivizing knowledge sharing, we're building
                a sustainable ecosystem that supports Hedera's growth across
                Kenya, Tanzania, Uganda, Rwanda, and beyond.
              </p>
              <Button asChild size="lg" className="mt-4">
                <Link href="/content-explorer">
                  Explore Our Resources <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
                alt="Tech workshop in East Africa"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3 border">
                <Image
                  src="https://images.unsplash.com/photo-1642059889836-3a2e24540f21?q=80&w=2574&auto=format&fit=crop"
                  alt="Hedera Logo"
                  width={60}
                  height={60}
                  className="rounded-md"
                />
              </div>
            </div>
          </div>
        </section>

        {/* East Africa Focus */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why East Africa?</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                East Africa represents one of the most promising regions for
                blockchain adoption, with a young, tech-savvy population and
                growing digital economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Young Population</h3>
                  <p className="text-muted-foreground">
                    Over 70% of East Africa's population is under 30, creating a
                    massive pool of potential innovators and early adopters.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mobile Penetration</h3>
                  <p className="text-muted-foreground">
                    The region has one of the highest mobile penetration rates
                    globally, providing the infrastructure for blockchain
                    applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Innovation Hubs</h3>
                  <p className="text-muted-foreground">
                    Cities like Nairobi, Kigali, and Kampala have become
                    thriving tech hubs with supportive startup ecosystems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Our Impact */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Since our launch, HederaConnect has made significant strides in
              advancing Hedera adoption across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="text-4xl font-bold text-primary mb-2">2,500+</div>
              <div className="text-muted-foreground">Developers trained</div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">
                University partnerships
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="text-4xl font-bold text-primary mb-2">42</div>
              <div className="text-muted-foreground">Startups incubated</div>
            </div>

            <div className="bg-background rounded-lg p-6 shadow-sm border">
              <div className="text-4xl font-bold text-primary mb-2">5</div>
              <div className="text-muted-foreground">Countries reached</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">Success Stories</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Building className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">AgriTrack Kenya</h4>
                    <p className="text-muted-foreground">
                      A supply chain solution built on Hedera that has helped
                      over 10,000 farmers verify and track their produce from
                      farm to market, increasing their earnings by 30%.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">EduCred Tanzania</h4>
                    <p className="text-muted-foreground">
                      A credential verification platform that has helped 5
                      universities in Tanzania issue tamper-proof digital
                      certificates to graduates, reducing fraud and verification
                      time.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Handshake className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">MicroLend Uganda</h4>
                    <p className="text-muted-foreground">
                      A microfinance platform using Hedera's token service to
                      provide affordable loans to small businesses, serving over
                      3,000 entrepreneurs in rural Uganda.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <Image
                src="https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=2070&auto=format&fit=crop"
                alt="Tech entrepreneurs in East Africa"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                HederaConnect employs a multi-faceted approach to drive Hedera
                adoption in East Africa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Education First</h3>
                  <p className="text-muted-foreground mb-4">
                    We aggregate and curate high-quality educational content
                    about Hedera from across the web, making it accessible to
                    learners at all levels.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <span>Localized learning resources</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <span>Translated documentation</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <span>Beginner-friendly tutorials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Community Building</h3>
                  <p className="text-muted-foreground mb-4">
                    We foster a vibrant community of Hedera enthusiasts,
                    developers, and entrepreneurs across East Africa through
                    events and networking.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <span>Monthly meetups in major cities</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <span>Annual East Africa Hedera Summit</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <span>Online forums and discussion groups</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Incentivized Participation
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our token-based reward system encourages content creation,
                    knowledge sharing, and active participation in the
                    ecosystem.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <span>Rewards for content creators</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <span>Hackathon prizes and grants</span>
                    </li>
                    <li className="flex items-center">
                      <div className="bg-primary/10 w-6 h-6 rounded-full flex items-center justify-center mr-2">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <span>Community recognition programs</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              HederaConnect is led by a diverse team of blockchain experts,
              educators, and community builders from across East Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"
                  alt="David Mwangi"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">David Mwangi</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
              <p className="text-sm text-muted-foreground mt-2">
                Nairobi, Kenya
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
                  alt="Sarah Omondi"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">Sarah Omondi</h3>
              <p className="text-muted-foreground">Head of Education</p>
              <p className="text-sm text-muted-foreground mt-2">
                Kampala, Uganda
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop"
                  alt="Michael Kagame"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">Michael Kagame</h3>
              <p className="text-muted-foreground">Technical Lead</p>
              <p className="text-sm text-muted-foreground mt-2">
                Kigali, Rwanda
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1974&auto=format&fit=crop"
                  alt="Grace Nyambura"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <h3 className="font-bold text-lg">Grace Nyambura</h3>
              <p className="text-muted-foreground">Community Manager</p>
              <p className="text-sm text-muted-foreground mt-2">
                Dar es Salaam, Tanzania
              </p>
            </div>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Partners</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We collaborate with leading organizations to accelerate Hedera
                adoption across East Africa.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1642059889836-3a2e24540f21?q=80&w=2574&auto=format&fit=crop"
                  alt="Hedera"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop"
                  alt="University of Nairobi"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1622675363311-3e1904dc1885?q=80&w=2070&auto=format&fit=crop"
                  alt="East Africa Tech Hub"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="African Development Bank"
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Whether you're a developer, educator, entrepreneur, or
                blockchain enthusiast, there's a place for you in our community.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/articles/new">Contribute Content</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/content-explorer">Explore Resources</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
