/**
 *
 * Asynchronously loads the component
 *
 */

 import { lazyLoad } from "../../utils/loadable"

 export const PersistPage = lazyLoad(
   () => import('./index'),
   module => module.PersistPage,
 );
 