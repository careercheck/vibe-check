'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useTypewriter } from '../hooks/use-typewriter'

export default function VibeCheck() {
  const [profile1, setProfile1] = useState('')
  const [profile2, setProfile2] = useState('')
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [matchResult, setMatchResult] = useState({ percentage: 0, prompt: '' })

  const tagline = useTypewriter('Find your social vibe, one profile at a time')

  const handleCheck = async () => {
    // TODO: Add API call here
    // For now, we'll simulate a response
    setMatchResult({
      percentage: Math.floor(Math.random() * 100),
      prompt: "You both share a passion for technology and innovation!"
    })
    setIsDialogOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white">
      <main className="flex-1 flex flex-col items-center justify-center p-4 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
          Vibe Check
        </h1>
        
        <div className="h-8">
          <p className="text-xl md:text-2xl text-center">
            {tagline}<span className="animate-blink">|</span>
          </p>
        </div>

        <div className="w-full max-w-md space-y-4">
          <Input
            placeholder="Profile 1"
            value={profile1}
            onChange={(e) => setProfile1(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Input
            placeholder="Profile 2"
            value={profile2}
            onChange={(e) => setProfile2(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
          />
          <Button 
            onClick={handleCheck}
            className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
          >
            Check vibe
          </Button>
        </div>
      </main>

      <footer className="p-4 text-center text-white/80">
        Developed and maintained by{' '}
        <a 
          href="https://linkedin.com/in/mahak" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white underline"
        >
          Mahak
        </a>
        {' '}and{' '}
        <a 
          href="https://linkedin.com/in/mehak-garg" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-white underline"
        >
          Mehak Garg
        </a>
      </footer>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-gradient-to-br from-purple-900 via-slate-900 to-black text-white border-white/20">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">
              {profile1} × {profile2}
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 p-4">
            <div className="text-4xl font-bold">
              {matchResult.percentage}% Match
            </div>
            <p className="text-center text-white/80">
              {matchResult.prompt}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

