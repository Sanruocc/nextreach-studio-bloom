# Admin Dashboard

This admin dashboard allows you to manage contact form submissions without needing a backend database. All data is stored locally in the browser's localStorage, making it perfect for Vercel's free plan.

## Access

The admin dashboard is accessible via:
**URL:** `/admin-nextreach-studio-2024`

**Default Password:** `nextreach2024`

## Features

### 📊 Overview Dashboard
- Total submissions counter
- New submissions counter
- Contacted submissions counter
- Weekly submissions analytics
- Recent submissions preview

### 📝 Submissions Management
- View all contact form submissions
- Search submissions by name, email, business, or message content
- Filter submissions by status (new, viewed, contacted, closed)
- Update submission status workflow
- Delete submissions
- Export all submissions as CSV

### 📈 Analytics
- Submission status breakdown
- Recent activity metrics
- Weekly submission trends

## Submission Workflow

Each submission goes through the following status workflow:
1. **New** - Just received (green badge)
2. **Viewed** - Admin has reviewed (blue badge)  
3. **Contacted** - Customer has been contacted (yellow badge)
4. **Closed** - Matter resolved (gray badge)

## Data Storage

- All submissions are stored in browser localStorage
- Data persists across browser sessions
- No server or database required
- Works on Vercel free plan

## Customization

### Change Admin Password
Edit the `ADMIN_PASSWORD` constant in `/src/pages/AdminDashboard.tsx`:

```typescript
const ADMIN_PASSWORD = 'your-new-password';
```

### Change Admin URL
Edit the route in `/src/App.tsx`:

```typescript
<Route path="/your-custom-admin-path" element={<AdminDashboard />} />
```

### CSV Export
The export feature creates a CSV file with all submission data including:
- Date, Name, Email, Business, Location
- Service requested, Budget range, Phone
- Current status and message content

## Security Notes

- Password protection prevents unauthorized access
- Admin URL is not discoverable through normal navigation
- All data is client-side only
- No sensitive data is transmitted to external servers

## Usage Instructions

1. Navigate to `/admin-nextreach-studio-2024`
2. Enter the admin password
3. Use the dashboard to manage submissions:
   - **Overview**: See summary statistics and recent submissions
   - **Submissions**: View, search, filter, and manage all submissions
   - **Analytics**: View detailed submission metrics

## Backup & Export

- Use the "Export CSV" button to download all submissions
- Store CSV files as backups since data is local only
- Regular exports recommended for data safety

## Troubleshooting

**Can't access admin dashboard:**
- Check the URL path is correct
- Verify the password matches the one set in the code

**Submissions not showing:**
- Ensure submissions were made after implementing this feature
- Check browser localStorage in Developer Tools (Application > Local Storage)

**Lost admin password:**
- Check the `ADMIN_PASSWORD` constant in AdminDashboard.tsx
- Or reset it by editing the file

## Technical Details

- Built with React, TypeScript, and shadcn/ui
- Uses browser localStorage API for data persistence  
- Responsive design works on desktop and mobile
- No external dependencies for data storage
- Compatible with Vercel serverless deployment