import { RootState } from '../../app/store';

export const selectBranding = (state: RootState) => state.theme.branding;