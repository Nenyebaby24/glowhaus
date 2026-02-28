"use client"

import { useState, useEffect } from "react"
import { useStore } from "@/store/useStore"

interface Props {
  nextStep: () => void
}