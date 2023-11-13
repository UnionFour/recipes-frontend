import '@angular/compiler';
import type { CodegenConfig } from '@graphql-codegen/cli'
import { uri } from './src/app/graphql.module'

const config: CodegenConfig = {
    schema: uri,
    documents: './src/**/*.ts',
    generates: {
        './src/gql/': {
            preset: 'client',
        }
    }
}
export default config