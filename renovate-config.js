module.exports = {
    dryRun: true,
    username: 'renovate-release',
    gitAuthor: 'Renovate Bot <bot@renovateapp.com>',
    onboarding: false,
    platform: 'github',
    includeForks: true,
    repositories: [
        'Slashgear/use-reduced-motion',
    ],
    packageRules: [
        {
            description: 'lockFileMaintenance',
            matchUpdateTypes: [
                'pin',
                'digest',
                'patch',
                'minor',
                'major',
                'lockFileMaintenance',
            ],
            dependencyDashboardApproval: false,
            stabilityDays: 0,
        },
    ],
};