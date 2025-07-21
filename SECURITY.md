# Security Guidelines for BOCS Pizza Admin Panel

## 🔒 Security Best Practices

### Environment Variables
Always use environment variables for sensitive configuration:

```bash
# .env file (never commit this file)
FIREBASE_API_KEY=your_actual_api_key
FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_project.firebasestorage.app
FIREBASE_MESSAGING_SENDER_ID=your_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### Files to Never Commit
The following files contain sensitive information and should never be committed:

- `.env` - Environment variables with secrets
- `firebase-messaging-sw.js` - Firebase configuration with API keys
- `/config/database.php` - Database credentials (if hardcoded)
- Any files containing API keys, passwords, or tokens

### Firebase Configuration Security

#### ✅ Secure Method
Use the template file `firebase-messaging-sw.js.example`:

1. Copy the example file:
   ```bash
   cp firebase-messaging-sw.js.example firebase-messaging-sw.js
   ```

2. Replace placeholder values with your actual Firebase configuration
3. Never commit the actual `firebase-messaging-sw.js` file

#### ❌ Insecure Method
Never hardcode API keys directly in files that will be committed to version control.

### API Key Rotation
If an API key has been exposed:

1. **Immediately rotate the key** in your Firebase Console
2. **Revoke the old key** to prevent unauthorized access
3. **Update all applications** using the old key
4. **Monitor for any suspicious activity**

### Git Security

#### Pre-commit Hooks
Consider setting up pre-commit hooks to scan for secrets:

```bash
# Install git-secrets
git secrets --install
git secrets --register-aws
```

#### Removing Sensitive Data from Git History
If sensitive data was already committed:

```bash
# Remove file from entire git history
git filter-branch --force --index-filter \
'git rm --cached --ignore-unmatch firebase-messaging-sw.js' \
--prune-empty --tag-name-filter cat -- --all

# Force push to update remote repository
git push origin --force --all
```

### Environment-Specific Configuration

#### Development
```javascript
// firebase-messaging-sw.js (development)
firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY_DEV,
    // ... other dev config
});
```

#### Production
```javascript
// firebase-messaging-sw.js (production)
firebase.initializeApp({
    apiKey: process.env.FIREBASE_API_KEY_PROD,
    // ... other prod config
});
```

### Security Checklist

- [ ] All sensitive data moved to environment variables
- [ ] `.env` file added to `.gitignore`
- [ ] Firebase configuration files excluded from git
- [ ] API keys rotated if previously exposed
- [ ] Pre-commit hooks configured
- [ ] Team educated on security practices
- [ ] Regular security audits scheduled

### Reporting Security Issues

If you discover a security vulnerability:

1. **Do not** create a public GitHub issue
2. Contact the development team directly
3. Provide detailed information about the vulnerability
4. Allow time for the issue to be resolved before disclosure

### Additional Resources

- [Firebase Security Rules](https://firebase.google.com/docs/rules)
- [Laravel Security Best Practices](https://laravel.com/docs/security)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)

---

**Remember**: Security is everyone's responsibility. When in doubt, ask the team!
