[**@orillusion/core**](../../../../README.md)

***

# Variable: Default

> `const` **Default**: `number`

Defined in: [src/gfx/renderJob/config/VisibleLayer.ts:45](https://github.com/orillusion/orillusion/blob/main/src/gfx/renderJob/config/VisibleLayer.ts#L45)

Default layer (bit 0). Applied to any new RenderNode so
 un-migrated code keeps the old "draw everything" behavior. By
 convention, applications should not use bit 0 for their own
 layers — reserve it for "unassigned / legacy".
