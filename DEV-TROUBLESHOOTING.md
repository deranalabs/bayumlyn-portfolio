# 🔧 Next.js Dev Server - Troubleshooting Guide

## 🚨 Masalah Umum & Solusi

### **Error: Cannot find module './[hash].js'**

**Penyebab:**
- Webpack cache corrupt
- Dev server running terlalu lama
- Hot reload breakdown

**Solusi Cepat:**
```bash
# Stop server dan clean cache
npm run restart

# Atau manual:
pkill -f "next dev"
rm -rf .next node_modules/.cache
npm run dev
```

---

### **Error: Module not found (MetaMask SDK / wallet packages)**

**Penyebab:**
- Turbopack mode tidak compatible dengan Web3 packages
- RainbowKit, wagmi, viem butuh Webpack

**Solusi:**
```bash
# JANGAN gunakan Turbo mode
# next dev --turbo  ❌

# Gunakan normal mode
npm run dev  ✅
npm run dev:clean  ✅
```

**Note:** Turbopack masih experimental dan belum fully support Web3 libraries.

---

## 📋 Commands Baru yang Tersedia

### **1. Clean Restart (RECOMMENDED)**
```bash
npm run dev:clean
```
Menghapus cache dan start fresh server.

### **2. Standard Dev Mode**
```bash
npm run dev
```
Standard development server (recommended).

### **3. Full Restart**
```bash
npm run restart
```
Kill server lama, clean cache, start baru.

### **4. Clean Cache Only**
```bash
npm run clean
```
Hanya membersihkan cache tanpa start server.

---

## 🎯 Best Practices

### **1. Restart Rutin**
**Jangan biarkan dev server running lebih dari 2-3 jam**

```bash
# Setiap 2-3 jam atau setelah banyak perubahan:
npm run restart
```

### **2. Monitor Memory**
Jika browser/terminal terasa lambat:
- ⚠️ **Sign:** Hot reload lambat (>5 detik)
- ⚠️ **Sign:** Error random muncul
- ✅ **Action:** Restart immediately

### **3. Avoid Excessive Hot Reloads**
- Save files dalam batch, bukan per character
- Gunakan auto-save dengan delay (1-2 detik)
- Close unused browser tabs

---

## 🛠️ Optimasi yang Sudah Diterapkan

### **1. Package Import Optimization**
```javascript
optimizePackageImports: ['lucide-react', '@rainbow-me/rainbowkit']
```
Mengurangi bundle size untuk faster reload.

### **2. File Watcher Configuration**
```javascript
watchOptions: {
  poll: 1000,              // Check changes setiap 1 detik
  aggregateTimeout: 300,   // Wait 300ms sebelum rebuild
  ignored: /node_modules/  // Ignore node_modules
}
```
Mencegah excessive rebuilds.

### **3. Webpack Externals**
Exclude heavy packages dari bundle untuk faster compilation.

---

## ⚡ Quick Fix Checklist

Jika dev server error/lambat:

- [ ] `npm run restart` - Clean restart
- [ ] Check browser console untuk error
- [ ] Close unused browser tabs
- [ ] Check memory usage (Activity Monitor)
- [ ] Restart VSCode jika perlu

---

## 🔥 Emergency Recovery

Jika semua gagal:

```bash
# 1. Kill all Node processes
pkill -9 node

# 2. Deep clean
rm -rf .next node_modules/.cache

# 3. Reinstall (jika perlu)
rm -rf node_modules package-lock.json
npm install

# 4. Fresh start
npm run dev
```

---

## 📊 Performance Tips

### **Reduce File Size:**
- ✅ Optimize images before adding to `/public`
- ✅ Use lazy loading untuk heavy components
- ✅ Split large files into smaller modules

### **Better Development:**
- ✅ Use `npm run dev:turbo` untuk faster dev
- ✅ Restart setiap 2-3 jam
- ✅ Close unused files di editor
- ✅ Use production build untuk testing: `npm run build && npm start`

---

## 🎓 Learn More

- [Next.js Dev Server Docs](https://nextjs.org/docs/api-reference/cli#development)
- [Webpack Watch Options](https://webpack.js.org/configuration/watch/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/compiler)

---

**Last Updated:** Nov 7, 2025
**Maintained by:** Bayu Mulyana (@bayumlynn)
