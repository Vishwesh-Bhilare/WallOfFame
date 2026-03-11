#!/bin/bash

echo "Creating Student Achievement Portal structure..."

# Root folder
PROJECT="student-achievement-portal"

mkdir -p $PROJECT
cd $PROJECT || exit

# Public assets
mkdir -p public/images
mkdir -p public/icons

# App router pages
mkdir -p src/app/login
mkdir -p src/app/dashboard
mkdir -p src/app/achievements/new
mkdir -p src/app/achievements/[id]
mkdir -p src/app/admin/pending
mkdir -p src/app/admin/reports
mkdir -p src/app/profile
mkdir -p src/app/search

# Components
mkdir -p src/components/ui
mkdir -p src/components/dashboard
mkdir -p src/components/achievements
mkdir -p src/components/admin

# Libraries
mkdir -p src/lib

# Services
mkdir -p src/services

# Hooks
mkdir -p src/hooks

# Types
mkdir -p src/types

# Constants
mkdir -p src/constants

# Middleware
mkdir -p src/middleware

# Styles
mkdir -p src/styles

# Supabase
mkdir -p supabase/migrations

# Create files

touch src/app/layout.tsx
touch src/app/page.tsx

touch src/app/login/page.tsx
touch src/app/dashboard/page.tsx

touch src/app/achievements/page.tsx
touch src/app/achievements/new/page.tsx
touch src/app/achievements/[id]/page.tsx

touch src/app/admin/page.tsx
touch src/app/admin/pending/page.tsx
touch src/app/admin/reports/page.tsx

touch src/app/profile/page.tsx
touch src/app/search/page.tsx

# UI components
touch src/components/ui/Button.tsx
touch src/components/ui/Card.tsx
touch src/components/ui/Input.tsx
touch src/components/ui/Modal.tsx

# Dashboard components
touch src/components/dashboard/StatsCard.tsx
touch src/components/dashboard/ActivityFeed.tsx

# Achievement components
touch src/components/achievements/AchievementCard.tsx
touch src/components/achievements/AchievementForm.tsx
touch src/components/achievements/FileUpload.tsx

# Admin components
touch src/components/admin/ReviewPanel.tsx
touch src/components/admin/StatusBadge.tsx

# Lib
touch src/lib/supabaseClient.ts
touch src/lib/auth.ts
touch src/lib/validators.ts
touch src/lib/helpers.ts

# Services
touch src/services/achievementService.ts
touch src/services/userService.ts
touch src/services/adminService.ts
touch src/services/reportService.ts

# Hooks
touch src/hooks/useAuth.ts
touch src/hooks/useAchievements.ts
touch src/hooks/useDashboardStats.ts

# Types
touch src/types/user.ts
touch src/types/achievement.ts
touch src/types/report.ts

# Constants
touch src/constants/achievementTypes.ts
touch src/constants/roles.ts

# Middleware
touch src/middleware/authMiddleware.ts

# Styles
touch src/styles/globals.css

# Supabase
touch supabase/seed.sql

# Root config files
touch .env.local
touch tailwind.config.ts
touch tsconfig.json
touch next.config.js
touch package.json

echo "Project structure created successfully!"