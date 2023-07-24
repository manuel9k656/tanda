import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.tanda.app',
  appName: 'tanda-app',
  webDir: 'dist/tanda-app',
  server: {
    androidScheme: 'https'
  }
};

export default config;
