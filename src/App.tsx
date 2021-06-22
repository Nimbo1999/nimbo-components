import { FC } from 'react';
import { Text } from './components/typografy';

const App: FC = () => <div className="app-container">
    <nav>
        <div>
            <h3>General</h3>

            <Text>Typografy</Text>
            <Text>Colors</Text>
            <Text>Spacing</Text>
            <Text>Grid</Text>
        </div>

        <div>
            <h3>Components</h3>
            <Text>Input</Text>
            <Text>Checkboxes</Text>
            <Text>Radios</Text>
            <Text>Textareas</Text>
        </div>
    </nav>
</div>;

export default App;
