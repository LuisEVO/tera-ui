// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from "./app.module.scss";
import { TeraButton } from "@tera-sd/react";

export function App() {
  return (
    <>
      <div>
        <TeraButton size="xs" color="primary">
          Button text
        </TeraButton>
        <TeraButton size="sm" color="primary">
          Button text
        </TeraButton>
        <TeraButton size="md" color="primary">
          Button text
        </TeraButton>
        <TeraButton size="lg" color="primary">
          Button text
        </TeraButton>
        <TeraButton size="xl" color="primary">
          Button text
        </TeraButton>
      </div>

      <div>
        <TeraButton size="xs" color="secondary">
          Button text
        </TeraButton>
        <TeraButton size="sm" color="secondary">
          Button text
        </TeraButton>
        <TeraButton size="md" color="secondary">
          Button text
        </TeraButton>
        <TeraButton size="lg" color="secondary">
          Button text
        </TeraButton>
        <TeraButton size="xl" color="secondary">
          Button text
        </TeraButton>
      </div>

      <div>
        <TeraButton size="xs">Button text</TeraButton>
        <TeraButton size="sm">Button text</TeraButton>
        <TeraButton size="md">Button text</TeraButton>
        <TeraButton size="lg">Button text</TeraButton>
        <TeraButton size="xl">Button text</TeraButton>
      </div>

      <div>
        <TeraButton size="xs" color="primary" rounded>
          Button text
        </TeraButton>
        <TeraButton size="sm" color="primary" rounded>
          Button text
        </TeraButton>
        <TeraButton size="md" color="primary" rounded>
          Button text
        </TeraButton>
        <TeraButton size="lg" color="primary" rounded>
          Button text
        </TeraButton>
        <TeraButton size="xl" color="primary" rounded>
          Button text
        </TeraButton>
      </div>
    </>
  );
}

export default App;
