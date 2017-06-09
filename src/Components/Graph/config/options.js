
const options = {
    nodes: {
        shape: 'icon',
        icon: {
            face: 'Material Icons',
            size: 50,
            color: 'rgba(181, 33, 43, 1)'
        },
        size: 20,
        font: {
            size: 15,
            color: 'rgba(255, 255, 255, 1)'
        }
    },
    edges: {
        width: 1,
        color: 'rgba(255, 255, 255, 0.3)',
        font: {
            color: 'rgba(255, 255, 255, 0.5)',
            size: 10,
            strokeWidth: 0
        }
    },
    groups: {
        project: {
            icon: {
              code: 'assignment',
            }
        },
        partner: {
            icon: {
              code: 'supervisor_account',
            }
        },
        device: {
            icon: {
              code: 'stay_current_portrait',
            }
        },
        user: {
            icon: {
                code: 'perm_identity'
            }
        }
    }
};

export default options;
